const arr = [1, 2, 3, 4, 5, 6];
function sumpro(a) {
    var product=1 ;
    var sum = 0;
    for (let i = 0; i < a.length; i++){
        product *= a[i];
        sum += a[i];
    }
    console.log("sum is" + sum);
    console.log(`product is  ${product}`)
    
}
sumpro(arr)