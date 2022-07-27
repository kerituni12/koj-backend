const { parse } = require('graphql');
const object = parse(`
mutation {
    login(data :{email:"hieunguyen", password:"hieunguyen"}){
      accessToken
    }
  }
`);

console.log(object);
