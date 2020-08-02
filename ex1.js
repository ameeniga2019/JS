// console.log("a|b|c|d|e|f|g|h".split("|"))
// console.log('       cat   \n\n\n    '.trim())
// console.log("aaaoo".replace(new RegExp("[Aa]{3}"), "b"))
// var arr = [3, 6, 3, 2, 44, 9]
// function add() {
//     console.log('bhyhhjgh')
// }
// console.log(typeof(add))
// console.log(typeof(arr))
var arr3= [ 'cat', 'rat', , 'mat', 'fat', , , , , , , , , , , , , , , , 'splat' ]
// arr3.splice(2, 2)
// delete arr3[1]
// arr3.splice(1, 3)
// console.log(arr3)
// var nums = "1, 1, 2, 3, 5, 8";
// console.log(nums.split(","))
// var jumble_nums = [3, 1, 8, 5, 2, 1];
// console.log(jumble_nums.sort())
var names = ['marc', 'Maria', 'John', 'jerry', 'alfred', 'Moonbeam'];
//console.log(names.sort())
names.sort(function (a, b) {
    var a1 = a.toLowerCase(), b1 = b.toLowerCase();
    if (a1 < b1) return -1;
    if (a1 > b1) return 1;
    return 0;
});
console.log(names)