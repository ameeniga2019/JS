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
function helper(myarr) {
    // var myarr = arr;
    var res = {
        title: '',
        message: ''
    }
  myarr.map(async ( item ,index)=> {
        if (item.state == 'processing')
            await timer(5000);
        else if (item.state == 'success') {
            res.title = 'Order complete';
            res.message = null;
            return (res)
        }
        else if (item.state == 'error') {
            if (item.errorCode == 'NO_STOCK') {
                res.title = 'Error page'; res.message = 'No stock has been found';
                return (res)
            }
            else if (item.errorCode == 'INCORRECT_DETAILS') {
                res.title = 'Error page';
                res.message = 'Incorrect details have been entered';
                return res;
            }
        }
        else if (item.errorCode == null) {
            res.title = 'Error page';
            res.message = 'null';
            return res;
        }
              
        else if (typeof (item.errorCode) == undefined) {
            res.title = 'Error page';
            res.message = 'null';
            return res;
        }
    })
 
}
var p = helper(data);
console.log(p)
