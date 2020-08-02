const data = [
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
var ar = [1, 2, 3, 4]
var t  = 'Amrutha'
var res = Array.isArray(data);
var res1 = Array.isArray(t)
console.log(res1)
console.log(typeof (data))
// reverse string
function revstr(s) {
    return s.split('').reverse().join('');
}
var t1 = 'welcome to this world'
console.log(revstr(t1))
console.log(ar.join())