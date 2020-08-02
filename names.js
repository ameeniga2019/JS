const faker = require('faker')
let fname = faker.name.findName();
let lname = faker.name.lastName();

console.log(`first name is:  ${fname}`)
console.log(`last name is:  ${lname}`)
console.log(faker)
