const person = {
    name: ' Amrutha',
    age: 22
}
person.name = 'AmruthaJagadish';
console.log(person.name)
console.log(person.age)
delete person.age;
console.log(person.age)
const student = Object.freeze({
    name: 'Krishna', 
    age: 11
})
student.name = 'Jayadeep'
console.log(student.name)
console.log(student.age)
delete student.age;
console.log(student.age)
const name = 'AMAAJJ'
console.log(name)

