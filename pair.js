var arr = [67, 11, 9, 67, 34, 2, 8, 9, 11, 2]
/*
function pair(array){
    var a = array; 
    var match = 0;
    for (let i = 0; i < a.length; i++)
        for (let j = i+1; j <a.length; j++){
            if (a[i] == a[j])
                match++;
        }
    return match;
}
console.log(pair(arr))
*/
function pairTarget(a, t) {
    var arr = a;
    var tar = t; var match = 0;
    for (let i = 0; i < a.length; i++)
    for (let j = i+1; j <a.length; j++){
        if (a[i] + a[j] == tar)
           match++; 
    }
    return (match > 0) ? true : false;
}
// var narr = ['njjd', 'uuu', 'yfgs', 'aaff', 'cmju']
// console.log(narr.sort())
// console.log(narr.reverse())
// console.log(arr.sort((a, b) => { return (b - a) }))
console.log(pairTarget(arr, 69))