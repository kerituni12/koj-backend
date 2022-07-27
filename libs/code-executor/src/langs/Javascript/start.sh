#!/bin/bash

. $(which env_parallel.bash)

dowork() {
    # $1 --> test case show or hide (show/1, show/2 ,...)
    # $2 --> timeout
    error_path="/user-solve/error/$1.err"
    output_path="/user-solve/output/$1.out"
    expected_output_path="/app/output/$1.out"
    result_path="/user-solve/result/$1.res"

    declare -A config
    IFS=/ read type_file file_name <<<$1

    while IFS== read -r key value; do
        config["$key"]="$value"
    done < <(jq -r --arg index "$file_name" '.[$index|tonumber] | to_entries | .[] | .key + "=" + (.value | @sh)' <<<$value)

    {
        run_code_cmd="(cat /app/input/$1.in | node /app/main.js) 1> ${output_path} 2>${error_path}"
        ts=$(date +%s%N)
        memory=$({ /usr/bin/time -f "%M" timeout ${config[timeout]} bash -c "$run_code_cmd"; } 2>&1)

        exit_status=$?

        if [[ $exit_status -eq 124 ]]; then
            error_message="timeout"
        else
            error_message=$(cat ${error_path})
        fi

        time_execute=$((($(date +%s%N) - $ts) / 10000000))
        # Because memory from above statement include status message we need to extract memory from last number of it
        memory=$(echo $memory | grep -Eo '[0-9]+$')

        hidden=true && [[ "$type_file" == "show" ]] && hidden=false

        output_log=$(tr -d '\0' <${output_path})
        expected_output=$(cat ${expected_output_path})

        [[ $output_log =~ (.*)[[:space:]]?@result@[[:space:]](.*[a-z0-9@\"\'[:space:]]*) ]]

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
            --arg score "${config[score]}" \
            '{
                "time": $time_execute | tonumber,
                "memory": $memory | tonumber,
                "errorMessage": $error_message ,
                "score": $score | tonumber ,
                "log": $log,
                "output": $output,
                "expectedOutput": $expected_output ,
                "hidden": $hidden | test("true")
            }' >$result_path
    } || {
        echo "err time command"
    }
}
# export -f dowork

value=$(jq -r '.' /app/score_timeout.json)

# Test jq
dowork2() {
    IFS=/ read type_file file_name <<<$1
    declare -A myarray
    while IFS== read -r key value; do
        myarray["$key"]="$value"
    done < <(jq -r --arg index "$file_name" '.[$index|tonumber] | to_entries | .[] | .key + "=" + (.value | @sh)' <<<$value)

    declare -p myarray
}

array=()
run_program() {

    # $1 --> timeout
    # $2 --> test or submit or both
    while
        IFS= read -r -d $'\0' line
    do
        # regex to get app/input/show/3 ---> show/3
        [[ $line =~ ^.*\/.*\/(.*\/.*[^.])\..*$ ]]
        # config=$(jq ".[$index]" <<< $value)
        array+=("${BASH_REMATCH[1]}")
    done < <(find /app/input/$2/* -print0)

    env_parallel -k dowork ::: "${array[@]}" ::: $1
}

# export -f run_program

if [[ "$2" == 'run_test' ]]; then
    # $1 --> timeout
    # $2 --> test or submit or both
    run_program $1 'show'

elif [[ "$2" == 'run_submit' ]]; then
    # can cai tien khi chay submit chi chay testcase an
    run_program $1 'show'
    run_program $1 'hide'
else
    run_program $1 'show'
    run_program $1 'hide'
fi
