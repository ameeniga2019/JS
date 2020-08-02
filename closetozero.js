function closestToZero(arr) {
    // Your code goes here
    var closest = 0;
    for (let i = 0; i < arr.length ; i++) {
        if (closest === 0) {
            closest = arr[i]
        } else if (arr[i] > 0 && arr[i] <= Math.abs(closest)) {
            closest = arr[i]
        } else if (arr[i] < 0 && -arr[i] < Math.abs(closest)) {
            closest = arr[i]
        }
    }
    return closest
     
}

var ts = [7,-10,13,8,4,-7.2,-12,-3.7,3.5,-9.6,6.5,-1.7,-6.2,7];

var result = closestToZero(ts);
console.log(result)