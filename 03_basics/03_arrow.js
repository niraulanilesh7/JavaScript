// // This and arrow function in javascript
// "use strict";// if we use use strict then,This would throw an error because implicit global variable creation is disallowed
// const user={
//     userName:"Nilesh",
//     price:199,
// // this keyword refers to current context
//     welcomeMessage: function(){
//         console.log(`${this.userName}, Welcome to our website`)
//         console.log(this);
        
//     }

// }

// user.welcomeMessage()
// user.userName="sam"
// user.welcomeMessage()
// console.log(this);
// // In node environment, this refers to empty object since there is no context in global
// // window object is a global object in browser environment

// function one(){
//     //username="Nilesh" this will output Nilesh in non strict mode
//     let username="Nilesh"
//     console.log(this.username);// output is undefined
    
    
// }
// one()

// const one=function(){ // this also gives undefined output
//     let userName="Nilesh"
//     console.log(this.userName);
    
// }
// one()
const one = () =>{
    let userName="Nilesh"
    console.log(this); // this outputs {} 
    // this.userName also output undefined here
}
one()

// const addTwo=(num1,num2) => { // This is basic arrow function
//     return num1+num2
// }

// Implicit return --> you donot need to use curly braces or parenthesis
// no need to write return also
// const addTwo=(num1,num2) => num1+num2
// we can also wrap num1+num2 in parenthesis
const addTwo=(num1,num2)=> ({username:"Nilesh"}) // you need to use parenthesis while using objects too otherwise it will output undefined

console.log(addTwo(3,4))

const myArray=[2,3,5,6,10,34,54]

//myArray.forEach(()=>{})