function String1(s, i) {
    var s1 = s.substring(0, i);
    var s2 = s.substring(i + 1, s.length);
    return (s1 + s2);
}
console.log(String1("Amrutha", 0))