class Workers {
    constructor(name, surname, days, rate) {
        this.name = name;
        this.surname = surname;
        this.days = days;
        this.rate = rate;
    }

    getSalary(){
        return Number((this.rate * this.days).toFixed(2));
    }
}

let worker1 = new Workers('Ivan', 'Birkov', 5, 1.2);
let worker2 = new Workers('German', 'Tranid', 7, 1.4);
let sum =  worker2.getSalary() + worker1.getSalary()

console.log(sum);