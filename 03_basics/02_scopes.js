//var c=300  // This is global scope
let a=300
if (true){  // this is block scope ie inside a block or curly braces
let a= 10
const b=20
//var c=30  // var is not fixed to a block or scope
console.log("Inner a:",a);

}

//console.log(a);
//console.log(b);
console.log(a);

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    
}

// There is difference in scope for browser or console in inspect and 
// in the node in coding environment