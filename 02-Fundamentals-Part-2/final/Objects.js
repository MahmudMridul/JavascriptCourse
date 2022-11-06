`use strict`

let person = {
    firstName : 'mobin',
    lastName : 'kobin',

    // this keyword doesn't work in arrow function
    // getFullName : () => {
    //     return `${this.firstName} ${this.lastName}`;
    // }

    getFullName : function() {
        return `${this.firstName} ${this.lastName}`;
    }
};

console.log(person.getFullName());

let Mark = {
    fulleName : 'Mark', 
    mass : 78, 
    height : 1.69, 
    calculateBMI : function() {
        let bmi = this.mass / (this.height ** 2);
        console.log(`${this.fulleName}'s BMI is ${bmi}`);
    }
};

let John = {
    fulleName : 'John', 
    mass : 92, 
    height : 1.95, 
    calculateBMI : function() {
        let bmi = this.mass / (this.height ** 2);
        console.log(`${this.fulleName}'s BMI is ${bmi}`);
    }
};

Mark.calculateBMI();
John.calculateBMI();

console.log(John['fulleName']);
