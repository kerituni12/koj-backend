curl \
--resolve 'sub.koj.test:80:koj.test' \
-X POST \
-H "Content-Type: application/json" \
--data '{"query": "{users {id}}"}' \
http://sub.koj.test/graphql

curl \
--header "Host: sub.koj.test" \
-X POST \
-H "Content-Type: application/json" \
--data '{"query": "mutation {login(data: {email:\"hieunguyen\", password:\"hieunguyen\"}){accessToken} }"}' \
http://sub.koj.test/graphql
