function sayMyName(){
console.log("N");
console.log("I");
console.log("L");
console.log("E");
console.log("S");
console.log("H");

}

sayMyName // this is function reference only 
sayMyName()// this is function execution

function addTwoNumbers(number1, number2){// parameters
    console.log(number1+number2);
    
}
function addTwoNumbers1(number1, number2){
    let result=number1+number2
    return result // statements below return are not executed
    console.log("Nilesh");
}// the scope of this returned result is inside function only

addTwoNumbers(3,null)//arguments

const result=addTwoNumbers1(3,5)
console.log("Result:",result);

function loginUserMessage(userName="Sam"){  // you give a default value
    if(!userName){ // undefined, "" is considered as false in js
        console.log("Please enter a username");
        return 
    }
    return `${userName} just logged in`
}

console.log(loginUserMessage("Nilesh"))
console.log(loginUserMessage()) // if nothing is given, it is undefined not null
