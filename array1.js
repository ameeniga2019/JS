var arr1 = [90, 34, 11, 2334, 33, 22];
var arr =["Amrutha", "Jagadish","Jayadeep", "Krishna"]
var val = 0;
arr.forEach((i) => console.log(i))
console.log('----------------------------------')

arr.forEach(function fib(i) {
     val = val + i;
    console.log(val)
})
console.log(arr.pop())
console.log(arr.shift())
console.log(arr.unshift("Krishna Chaitanya"))
console.log(arr.push(78));
console.log(arr)
console.log(arr.reverse())