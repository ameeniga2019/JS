function formatDate(userDate) {
    date = userDate.split('/');
    if(date[0]<10)
     date[0] = "0"+date[0];
  if(date[1]<10)
     date[1] = "0"+date[1];
    return date[2]+date[0]+date[1]
   
  }
  
console.log(formatDate("1/3/2014"));
console.log("first")
setTimeout(() => {
    console.log("second")
}, 1000)
setTimeout(() => {
    console.log("Anothersecond")
}, 2000)
console.log("third")
