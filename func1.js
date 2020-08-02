class car{
    constructor(brand) {
        this.brand= brand
    }
    get name() {
        return this.brand + "kkkk";
    }
    set sname(brand) {
        this.brand= brand+"AM"
    }
}
mycar = new car('Amrutha')

// console.log(mycar.sname('mlmlml'))    /* this is wrong
console.log(mycar.name)
