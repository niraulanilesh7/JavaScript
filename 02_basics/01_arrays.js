// arrays

const myArr= [0,1,2,3,4,5] // we can use different types of data in js arrays
const myHeros=["ironman","Thor","Loki","Spiderman"]

const myArr2= new Array(1,2,3,4)

console.log(myArr2[2])
console.log(myHeros[2])

//Arrays method

myArr.push(6)// adds element at the last index
myArr.push(7)
myArr.pop()// remove the element from last index

myArr.unshift(9)//Adds the element to the first index and shifts others to +1

console.log(myArr);

myArr.shift()//removes the first element of the array
console.log(myArr)

console.log(myArr.includes(2)) // gives true or false
console.log(myArr.indexOf(9));// gives the index of element ie first that 
// occurs

const newArr = myArr.join('$') // gives string -you can use any seperator  
console.log(myArr);
console.log(newArr);
console.log(typeof newArr);

// Slice and Splice
console.log("A ",myArr);

const myn1= myArr.slice(1,3)//doesnot change the original array
// slice doesnot include the range ie 3rd index element
console.log(myn1)
console.log("B ", myArr)

const myn2= myArr.splice(1,3)//changes the original array too
// includes the range ie 3rd element [1,2,3]

console.log(myn2)
console.log("C ", myArr)
