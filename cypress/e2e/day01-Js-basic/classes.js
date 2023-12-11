class Car {
    constructor(carname, model, year) {
        this.carname = carname
        this.model = model
        this.year = year
    }

    carAge() {
        let date = new Date()   // comes from JS
        return date.getFullYear()-this.year
    }
}

let date = new Date() 
console.log(date.getFullYear())   // 2023


var myCar=new Car("Mazda", "626", "2013")
console.log(myCar.carname, myCar.model)
console.log("My car age is",myCar.carAge())

