var arr = [2, 4, 4, 55, 666, 233, 988, 54]
function restad(...arg) {
    var sum = 0;
    for (let i = 0; i < arg.length; i++)
        sum = sum + arg[i];
    return sum;
}
var g= [3,3,9]
console.log(restad(1,2,3,3,4,5,))
console.log(restad(1, 1, 2, 4, 4, 55, 666, 233, 988, 54))

const arr1 = [90, 80, 70]
function sum(n) {
    var s = 0;
    var arr = n;
    for (let i = 0; i < arr.length; i++)
        s = s + arr[i];
    return s;
}
console.log(sum(arr1))