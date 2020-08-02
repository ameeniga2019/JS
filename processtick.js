function pt() {
    console.log('This is process tick')
    
}
async function cb(s) {
    setTimeout(() => { console.log('This is set time out  ' + s), 100 })
}

process.nextTick(pt);
console.log(cb('Amrutha'))
console.log('*********')