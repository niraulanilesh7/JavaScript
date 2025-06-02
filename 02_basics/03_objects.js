//  singleton object --> object made by using constructor

// objects literals
//Object.create()--> we get singleton object here

const mySym=Symbol("key1")

const jsUser={
    [mySym]:"mykey1",//use [] for using symbol as key else treated as string
    name:"Nilesh",
    "full name":"Nilesh Niraula",
    age:22,
    location:"Itahari",
    email:"nilesh@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}

console.log(jsUser.location)
console.log(jsUser["location"])//use "" since location is stored as string
console.log(jsUser["full name"]);
console.log(typeof jsUser[mySym]);

jsUser.email="nilesh123@yahoo.com"
console.log(jsUser.email);

// Object.freeze(jsUser)//doesnot let modify current property or add new properties

jsUser.email="nilesh123@chatgpt.com"
console.log(jsUser);

jsUser.greeting= function(){  // you can treat function as variable in js
    console.log("Hello jsUser")
}
jsUser.greeting2= function(){  
    console.log(`Hello jsUser, ${this[mySym]}`)
}// you can access other keys using . but use [] for symbol 

console.log(jsUser.greeting)// it gives function reference not execute function
console.log(jsUser.greeting())//undefined is the output from this console.log
// Hello jsUser is given by greeting function but it doesnot return any value

console.log(jsUser.greeting2())
