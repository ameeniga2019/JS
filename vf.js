const data = [
    {
        state: 'processing',
        errorCode: 'no error'
    },
    {
        state:'NO_STOCK',
        errorCode: 'ok error'
    },
    {
        state: 'success',
        errorCode: 'bad error'
    },
    {
        state:'null',
        errorCode: 'null error'
    },
    {
        state:'undefined',
        errorCode: 'undefined error'
    },
]
function timer(ms) {
    return new Promise(res => setTimeout(res, ms));
   }
 function getProcessingdata(arr) {
    arr.map(async(key,index) =>{
    // for (let i = 0; i < arr.length; i++){
        if (key.state == "processing") {
            console.log('processing')
            await (timer(5000));
        }
        else if (key.state == "success")
            console.log(helper("success"))
        else 
            console.log(helper(key.state))
            
    })
}
function helper(s) {
  console.log(s)
    if (s =="success")
        return (
            {   title: 'Order complete',
                message: null
            }
        )
    else if (s =="NO_STOCK" ) {
        return (
            { title: 'Error page', message: 'No stock has been found' }
        )
    }
    else if (s == 'null')
        return ({ title: 'Error page', message: null })
    else if (s == 'undefined')
        return({ title: 'Error page', message: null })
}
getProcessingdata(data)