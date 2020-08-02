// function recursion(n) {
//     if (n < 2)
//         return 1;
//     else
//         return n * recursion(n - 1);
// }
// console.log(recursion(5))
// console.log(recursion(4))
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// var arr1 = arr.slice(2, 5);
// var arr2 = arr.slice(2, 3);
// var arr3 = arr.slice(2);
// console.log(arr1, arr2,arr3)
//  set example
var arr = [1, 4, 5, 6, 7, 2, 1, 3, 9, 6, 2]
var s = new Set(arr);
console.log(s)
s.add(99)
for (var key of s)
    console.log(key)
s.clear()
    console.log(s)
