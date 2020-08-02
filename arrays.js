/*
arr = ["Red", "Green", "White", "Black"];
var a = " red gjhhjhjhggghg"
console.log(arr.toString())
console.log(arr.join('+'))
console.log(arr.join())
console.log(a.split("").join())

console.log(Array.from(String(12345), Number));
var num = 12234567889;
const str = num.toString();
const result = [str[0]];
  
for(let x=1; x<str.length; x++)
  {
    if((str[x-1]%2 === 0)&&(str[x]%2 === 0))
     {
      result.push('-', str[x]);
     }
    else
     {
      result.push(str[x]);
     }
  }
console.log(result.join(''));
*/
var num = 676532164;
// function dash(n1) {
//     var n = n1.toString();
   
//     for (let i = 0; i < n.length; i++){
//         if (n[i] % 2 == 0)
//             n.push('-', n[i]);
//     }
//     return (n.join(''))
// }

num = num.toString();
var result = [];
for (let i = 0; i <num.length; i++) {
    if (num[i] % 2 ===0)
        result.push('-', num[i]);
    else
        result.push(num[i])
}
console.log(result.join(''))
var arr1 = [3, 8, 7, 6, 5, -4, 3, 2, 1];
console.log(arr1.sort((a, b) =>{ return a - b }))