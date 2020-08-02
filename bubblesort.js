var arr =[
    {
        state: 'processing',
        errorCode: 'no error'
    },
    {
        state:'NO_STOCK',
        errorCode: 'ok error'
    },
    {
        state: 'success',
        errorCode: 'bad error'
    },
    {
        state:'null',
        errorCode: 'null error'
    },
    {
        state:'undefined',
        errorCode: 'undefined error'
    },
]
var b =[1,2,3,4]
// console.log(toString.call(arr))
// console.log(Array.isArray('w3resource')); 
// var c = b.slice(0);
// c.push(11,11,22)
// console.log(c)
/*
function first(a, n) {
    if (n == null)
        return a[0];
    if (a == null)
        return void 0;
    if (n < 0)
        return []
    if (n >= 0)
        return a.slice(0,n)
}
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));
*/
function last(a, n) {
    if (n == null)
        return a[a.length-1];
    if (a == null)
        return void 0;
    if (n < 0)
        return []
    if (n >= 0)
        return a.slice(Math.max (a.length -n, 0))
}
console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2],3));
console.log(last([7, 9, 0, -2],6));