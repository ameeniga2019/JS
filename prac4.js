const people = [
    { name: "John", age: 21 },
    { name: "Peter", age: 31 },
    { name: "Andrew", age: 29 },
    { name: "Thomas", age: 25 }
];
  
const arr = people.sort((p1, p2) => { return (p1.age - p2.age) })
console.log(arr)