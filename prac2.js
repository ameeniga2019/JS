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
      console.log( new Promise(res => setTimeout(res, ms)));
       }
 function helper(state, errorCode) {
    var res = {
        title: '',
        message:''
    }
       if (state == 'processing')
       {
           setTimeout(() => {console.log() }, 2000);
         
       }
        else if (state == 'success') {
            res.title = 'Order complete';
            res.message = null;
          return res;
        }
        else if (state == 'error') {
            if (errorCode == 'NO_STOCK') {
                res.title = 'Error page'; res.message = 'No stock has been found';
              return res;
            }
            else if (errorCode == 'INCORRECT_DETAILS') {
                res.title = 'Error page';
                res.message = 'Incorrect details have been entered';
                return res;
            }
        }
        else if (errorCode == null) {
            res.title = 'Error page';
            res.message = 'null';
          return res;
        }
              
        else if (typeof (errorCode) == undefined) {
            res.title = 'Error page';
            res.message = 'null';
          return res;
        }
    
 
}
for (let i = 0; i < data.length; i++)
{
    console.log(helper(data[i].state,data[i].errorCode))
 }

