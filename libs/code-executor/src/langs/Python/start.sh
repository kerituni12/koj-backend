dowork() {
    # $1 --> test case show or hide (show/1, show/2 ,...)
    # $2 --> timeout
    error_path="/user-solve/error/$1.err"
    output_path="/user-solve/output/$1.out"
    expected_output_path="/app/output/$1.out"
    result_path="/user-solve/result/$1.res"

    {
        run_code_cmd="(cat /app/input/$1.in | python3 /user-solve/main.py) 1> ${output_path} 2>${error_path}"
        ts=$(date +%s%N)
        memory=$({ /usr/bin/time --quiet -f "%M" timeout $2 bash -c "$run_code_cmd"; } 2>&1)
        exit_status=$?

        if [[ $exit_status -eq 124 ]]; then
            error_message="timeout"
        else
            error_message=$(cat ${error_path})
        fi

        IFS=/ read type_file file_name <<<$1
        hidden=true && [[ "$type_file" == "show" ]] && hidden=false
        echo $hidden
        output_log=$(cat ${output_path})
        expected_output=$(cat ${expected_output_path})
        time_execute=$((($(date +%s%N) - $ts) / 1000000))

        [[ $output_log =~ ([a-z0-9[:space:]@\"\]*)[[:space:]]?@result@[[:space:]](.*[a-z0-9@\"\'[:space:]]*) ]]

        log=${BASH_REMATCH[1]}
        output=${BASH_REMATCH[2]}

        jq --null-input -c \
            --arg time_execute "$time_execute" \
            --arg output "$output" \
            --arg log "$log" \
            --arg expected_output "$expected_output" \
            --arg memory "$memory" \
            --arg hidden "$hidden" \
            --arg error_message "$error_message" \
            '{
                "time": $time_execute,
                "memory": $memory,
                "error_message": $error_message ,
                "log": $log,
                "output": $output,
                "expected_output": $expected_output ,
                "hidden": $hidden | test("true")
            }' >$result_path
    } || {
        echo "err time command"
    }
}
export -f dowork

array=()
run_program() {
    # $1 --> timeout
    # $2 --> test or submit or both
    while IFS= read -r -d $'\0' line; do
        # regex to get app/input/show/3 ---> show/3
        [[ $line =~ ^.*\/.*\/(.*\/.*[^.])\..*$ ]]
        array+=("${BASH_REMATCH[1]}")
    done < <(find /app/input/$2/* -print0)

    parallel -k dowork ::: "${array[@]}" ::: $1
}

export -f run_program

if [[ "$2" == 'run_test' ]]; then
    # $1 --> timeout
    # $2 --> test or submit or both
    run_program $1 'show'
elif [[ "$2" == 'run_submit' ]]; then
    run_program $1 'show'
else
    run_program $1 'show'
    run_program $1 'hide' i
fi
# echo $outputt
