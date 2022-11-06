var varvar = "varvar";
let letvar = "letvar";

function func()
{
    varvar2 = "varvar2";
    letvar2 = "letvar2";

    console.log("varvar is " + varvar);
    console.log("letvar is " + letvar);

    console.log("varvar2 is " + varvar2);
    console.log("letvar2 is " + letvar2);
}

//console.log("varvar2 is " + varvar2);
//console.log("letvar2 is " + letvar2);

let value = prompt(`Enter anything`);
console.log(value);

func();
