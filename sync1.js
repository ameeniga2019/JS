function later() {
    val = val * 2;
    console.log(val)
}
function now() {
    return 10;
}

var val = now();

setTimeout(later, 2000)