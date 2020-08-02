const Mynum = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];
// function removeDupli(arr) {
//     var ar = arr; 
//     ar = ar.sort((a, b) => { return a - b })
//     console.log(ar); var l = ar.length;
//     // let dup = [...new Set(ar)];
//     for (let i = 0; i < l; i++)   
//         for (let j = i ; j < l; j++)
//         if (ar[i] == ar[j]) {
//                 ar.splice(j, 1); 
//                 j--;
//                 l--;
//             }
//     return ar;
// }
// console.log(removeDupli(Mynum))
// const vals = [22,88,3,11,22,11,88,55,876,0,88,0,22]
// console.log(vals.sort().reduce(function (a, b) { if (b != a[0]) a.unshift(b); return a }, []))
// console.log(Mynum.sort().reduce(function(a, b){ if (b != a[0]) a.unshift(b); return a }, []))
function removeDuplicates(num) {
    let x;
    const len=num.length;
    const out=[];
    const obj=[];
  
    for (x=0; x<len; x++) {
      obj[num[x]]=0;
    }
    for (x in obj) {
      out.push(x);
    }
    return out;
}
  console.log(removeDuplicates(Mynum))