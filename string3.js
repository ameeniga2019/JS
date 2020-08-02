function string3(s) {
    var s1 = s.substring(s.length - 1, s.length);
    var s2 = s.substring(0, 1);
    return (s1 + s + s2);
}
function reverse(str){
    return str.split("").reverse().join("");
}
function reversed(s) {
    let rs  = "";
    for (let i = s.length-1; i >=0; i--){
        rs = rs+s[i];
    }
    return rs;
}  
console.log(reversed("amrutha"))