// if statement 
const isUserLoggedIn=true

if(2==="2"){ // strict equal or triple equal
    console.log("Executed");
    
}

//<,>, <=,>+, ==, !=, ===, !==

const temperature=51

if (temperature<50){
    console.log("Temperature is less than 50");
} else{
    console.log("Temperature is greater than 50");
}

const score=200

if(score>100){
    const power="fly"
    console.log(`User power: ${power}`);
    
}

const balance=800

if (balance>500) console.log("test"),
console.log("test2");

if (balance<500){
    console.log("Less than");  
} else if(balance<750){
    console.log("Less than 750");
} else if(balance<900){
    console.log("Less than 900");
} else{
    console.log("Less than 1200");
}

const UserLoggedIn=true
const debitCard=true
const loggedInFromGoogle=false
const loggedInFromEmail=true


if(UserLoggedIn && debitCard && 2==2){
    console.log("Allow to buy courses");
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User Logged in ");
    
}

