var str = 'TheQuickBrownFox';
console.log(str.toLowerCase())
function uplo(s) {
    var res = [];
    for (let i = 0; i < s.length; i++)
        if (/[A-Z]/.test(s[i + 1]))
            res.push(s[i].toLowerCase())
        else
            res.push(s[i].toUpperCase())
    return res.join('');
}
console.log(uplo(str))