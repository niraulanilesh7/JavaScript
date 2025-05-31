// primitives datatypes
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt
const score=100;
const scoreValue=100.3

const isLoggedIn=false
const outsideTem= null;
let useEmail=undefined; // or userEmail; it also sets the datatype to undefined

const id=Symbol('123')
const anotherId= Symbol('123')

console.log(id)
console.log(anotherId)
console.log(id===anotherId) // the result is false
console.log(typeof id)// type of symbol is symbol

const bigNumber= 2342354654633563563636356236462346374737475774357475n
console.log(bigNumber)
console.log(typeof bigNumber)//use n at last for bigint else it is number
// Javascript is dynamically typed language

// Reference (Non Primitive)
// Arrays, Objects, Functions

const heros=["Ironman","Dr Strange","Thor","Loki"] //arrays uses square bracket
console.log(heros)
console.log(typeof heros)

let myObj={
    name:"Nilesh",
    age:23

}
console.log(myObj)

const myFunction=function(){
    console.log("Hello world!")
}
myFunction();//to call a function
console.log(typeof myFunction)// type of function is function


