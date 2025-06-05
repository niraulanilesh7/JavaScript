// Functions with object and array

function calculateCartprice(val1,val2,...num1){ // rest operator same as spread
    return num1;
}// rest operator collects multiple elements and give it in single array

console.log(calculateCartprice(400,500,230,480));

const user={
    username:"Nilesh",
    price:399
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
    
}

handleObject(user)
handleObject({
    username:"Hari",
    price:199
})

const myNewArray=[200,400,300,500,800]

function returnSecondValue(getArray){
    return getArray[1] // check what happens when return has multiple variables
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([10,20,30,40]));


