function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    var arr =A;
    arr = arr.sort((a,b)=>{ return (a-b)})
    var l = arr.length;
    var s=arr[l];
    if(s>0)
    return (s-1);
    else if(s==0)
    return (s+2);
}
var arr = [1, 3, 6, 4, 1, 2]
console.log(solution(arr))