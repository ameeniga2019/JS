// [1, 2, 3].forEach(console.log)
// console.log('FRED'.toLowerCase())
// const numbers = [10, 20, 30]
// var x = 30
// numbers.forEach(console.log)

// function sw(n) {
//     var desc;
//     switch (n) {
//         case 0:
//             desc = 'Zero value'; break;
//         case true:
//             desc = 'true value'; break;
//         default:
//             console.log('this is default switch')
//     }
//     return desc;
// }
// console.log(sw(09))
// var arr = [10, 30, 20, 5, 99, 45]
// var arr2 = [10, 30, 20, 5, 99, 45]
// // var value = 15;
// var value = 15;
// for (let i in arr)
// {
//     if (arr[i] == value)
//     console.log('position at ' + i)
//     }
var arr1 = [...arr, 111, 444, 333]
arr1 =[...arr1, ...arr2]
console.log(arr1)