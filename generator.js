// function* gen() {
//     let i = 1;
//     while (true) {
//         yield i;
//         i = i *2;
//     }
// }
// var generator = gen()
// console.log(generator.next(), generator.next())
// console.log(generator.next(), generator.next())

function *gen() {

    let i = 0;
   
    while (true){
   
      let inData = yield i++;
   
      console.log( inData );
   
    }
   
   }
   
   let sequence = gen();

   sequence.next()
   
   sequence.next( 'test1' )
   
   sequence.next()
   
   sequence.next( 'test2' )   