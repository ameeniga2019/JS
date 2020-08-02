// var x = 9; var y = 0;
// (x / y == Infinity) ? console.log(true) : console.log(false)
// console.log("Wishy washy winter".indexOf("wash"));
function fibanocci(n) {
    if (n <= 1)
        return 1;
    else
        return fibanocci(n - 1) + fibanocci(n - 2);
}
var arr =[]
for (let i = 0; i <= 9;  i++) {
    arr[i] = fibanocci(i);
}
    console.log(arr)
