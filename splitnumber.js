// const n = 123456;
// console.log(Array.from(n.toString()).map(Number))
function createCheckDigit(membershipId) {
    var n = membershipId;
    var total ;
    do {
        total = add(n);
        n = total;
    }
    while (total >10)
    return total;
  }
function add(n) {
    n = Array.from(n.toString()).map(Number);
    var sum = 0;
    for(let i=0;i<n.length;i++)
        sum = sum + n[i];
    return sum;
  }
  console.log(createCheckDigit("55555"));