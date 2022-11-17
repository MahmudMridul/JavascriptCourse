'use strict'

const funca = (text) => {
    console.log(`logging ${text}`);
}

const funcb = (text, funca) => {
    console.log(text);
    funca(text)
}

funcb(`a random text without meaning`, funca);

const saySomething = (something) => {
    return (otherThing) => {
        console.log(`${something} and ${otherThing}`);
    }
}

const saying = saySomething(`this function is returning another function`);
saying(`calling the saved function`);

saySomething(`returning another function`)(`calling the returned function`);

let monkey = {
    hasTail : true,
    activity : [],
    beAnimal(someActivity) {
        this.activity.push(someActivity);
        console.log(this.activity);
    }
};

monkey.beAnimal(`jumping`);
monkey.beAnimal(`running`);

console.log(monkey);

let lion = {
    hasTail : false,
    activity : []
}

let tiger = {
    isFat : true,
    activity : [] 
}

let hippo = {
    isAlwaysHungry : true,
    activity : []
}

let beingAnimal = monkey.beAnimal;

beingAnimal.call(lion, `hunting`);
beingAnimal.call(tiger, `being fat`);

console.log(lion);
console.log(tiger);

let lionAnimal = beingAnimal.bind(lion);
lionAnimal(`doing nothing`);

console.log(lion);