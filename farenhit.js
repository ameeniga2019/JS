function celcius(n) {
    var cTemp = n;
  var cToFahr = cTemp * 9 / 5 + 32;
  var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
    console.log(message);
    console.log(`${cToFahr}`);
  
}
celcius(40)