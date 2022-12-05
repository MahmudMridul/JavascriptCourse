'use strict';

const User = function(userName, password) {
    this.userName = userName;
    this.password = password;

    //Bad practice
    this.showDetail = function() {
        console.log(`Username: ${this.userName}\nPassword: ${this.password}`);
    }
}

let userOne = new User('oop', 'oop#1');
console.log(userOne);
userOne.showDetail();
userOne.address = 'address koi theke ashlo';
console.log(userOne);

const Client = function() {

}

let first = new Client();
first.name = 'Abbas';
first.address = 'ekta jayga'

Client.prototype.getName = function() {
    return this.name;
}

Client.prototype.getAddress = function() {
    return this.address;
}

console.log(Client.prototype);

console.log(first.getName());
console.log(first.__proto__);