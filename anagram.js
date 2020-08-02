var output = (function(x) {
    delete x;
    return x;
  })(0);
  
  console.log(output);
/*

(function () {
    var a = b = 5;
  })();
  
  console.log(b);

function anagram(s1, s2) {
    var a = s1.toLowerCase();
    var b = s2.toLowerCase();
    a = a.split('').reverse().join('');
  //  b = b.split('').reverse().join('');
    return a === b;
}
console.log(anagram('Army', 'Mary'))
console.log(anagram('lkjhgf','fghjkl'))
*/