// "use strict"

totalGlobalVariable = "Never EVER! dog this!"
var globalVariable = "also never do this."


// global scope

//reserved names fx public
const arguments = 123;

function anotherScope () {
    //function scope

}

{
    //block scope
}

{
    // console.log("Hello i am in a block scope")
}

{
    //var ville bløde ud af scope
    let someVariable = true
    {
        let someVariable = false;
    }
    // console.log(someVariable)
}

for (var i = 0; i <= 5; i++){

    setTimeout(() => {
    //    console.log(i) 
    }, 1000);

}


function getRandomInt(min, max) {
return 5;
}


function genericActionPerformer (genernicAction, name) {
    return genernicAction(name)
}

const jump = (name) => `${name} is jumping`

//desired result: lasse is jumping
const resultJump = genericActionPerformer(jump, "Lasse")
console.log(resultJump)

//Desired result "Jonathan is running"

function run (name) { 
    return `${name} is running`
}

const resultRun = genericActionPerformer(run, "Jonathan");

console.log(resultRun)


//Desired result is "Daniel is sleeping"
//Create a sleep callback get the desired result;


const sleeping = genericActionPerformer((name) => `${name} is sleeping`, "Daniel")
console.log(sleeping)
