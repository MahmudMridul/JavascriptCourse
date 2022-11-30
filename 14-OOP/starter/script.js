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
