// Scope level and mini hoisting in javascript
// closure in js

function one(){
    const userName="nilesh"

    function two(){
        const website="Youtube"
        console.log(userName);
        
    }
    //console.log(website);
    two()
}

one()

if(true){
    const userName="Nilesh"
    if(userName==="Nilesh"){
        const website="Youtube"
        console.log(userName+website)
    }
    //console.log(website);
    
}

//console.log(userName);

//----------  Interesting ---------//

console.log(addone(5));

function addone(num){ // this is a function, below is also a function 
    return num+1

}

console.log(addTwo(5)); // this gives error when used before declaration

const addTwo=function(num){ // this is sometimes called expression 
    return num+2
} // here we have declared and hold the function in a variable
// there is concept in js called hoisting


