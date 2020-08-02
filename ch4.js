// employee = {
//     name: 'Amrutha',
//     age: 40,
//     get fullname() {
//         return  (this.name+"   Meeniga")
//     }
// }
class employee {
    constructor(name,fname,  age) {
        this.name = name;
        this.age = age
        this.fname = fname;
    }
    get fullname() {
        return this.name + this.fname;
    }
}
var e1 =   employee('ammm','llll',22)
console.log(employee.fullname)