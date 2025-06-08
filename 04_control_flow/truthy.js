// Truthy values -> assumed to be true 
// Falsy values -> assumed to be false

const userEmail="nilesh@gmail.com" // empty string is considered false
// Other strings are considered to be true
// but empty array is also considered to be true

if(userEmail){
    console.log("Got user email")
} else{
    console.log("Don't have useremail");
}

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// "0", 'false', " ", [], {}, function(){}

const array1=[]

if(array1.length === 0){
    console.log("Array is empty");
}

const emptyObject={}

if (Object.keys(emptyObject).length===0){
    console.log("Object is empty");
    
}

// Nullish coalescing operator (??): null undefined
// it assigns the first value if it is null or undefined
let  val1;
val1=5 ?? 10
val1= null ?? 10
val1= null ?? 100
val1= null ?? 10 ?? 20
 console.log(val1);
 
// Ternary Operator

//condition ? true : false

(1==2) ? console.log("true") : console.log("false");

const iceTeaPrice= 100
iceTeaPrice <=80 ? console.log("Less than 80") : console.log("More than 80");




