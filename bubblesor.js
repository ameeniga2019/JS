const arr = [99, 55, 1, 666, 33, 54]

function bubbleSort(ar) {
    var A = ar;
    for (let i = 0; i < A.length; i++)
        for (let j = i + 1, temp = 0; j < A.length; j++){
            if (A[i] > A[j])
            {
                temp = A[j];
                A[j] = A[i];
                A[i] = temp;
                }
        }
    return A;
}
const narr= [67,1,546,99, 0, -8,1,0]
var b = (bubbleSort(narr))
var c =  new Set(narr)
console.log(c)
console.log(b)