// var a = {}
// var b = a;
// a.v = 1
// b.v = 2
// console.log(a.v)
// var c = 'hello you !'
// c = c.split(" ")
// console.log(c[1])
spy ={ id:1, name: 'ghghh', age:30}
console.log(spy)
/* iterating through object */
Object.keys(spy).forEach(key => {
    spy[key] = "Amru"+key
  })
console.log(spy)
var myarray = [
    {key: 1, firstName: "George", lastName: "Jones", age: 60},
    {key: 1, firstName: "Alison", lastName: "Clarke", age: 66},
    {key: 1, firstName: "Ben", lastName: "Smith", age: 26},
    {key: 1, firstName: "Xavier", lastName: "Clarke", age: 34},
    {key: 1, firstName: "Harold", lastName: "Timmins", age: 69}
    ];
    
    myarray.sort(function(a, b) {
        return a.lastName.localeCompare(b.lastName) || 0
            //   ||  a.firstName.localeCompare(b.firstName) 
    });
    console.log(myarray)

myarray.sort((a, b) => { return a.age - b.age })
    console.log(myarray)