i=$1
date +%s%N > /app/time$i.txt
timeout $2 bash -c "(cat /app/in$i.txt | bash /app/Main.sh) 2> /app/error$i.txt 1> /app/output$i.txt"
echo $? > /app/exitCode$i.txt
date +%s%N >> /app/time$i.txt
# echo hello