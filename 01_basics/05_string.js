const name="Nilesh"
const repoCount=50;

//console.log(name+repoCount+" value");

console.log(`Hello My name is ${name} and my repo count is ${repoCount}`);

const gameName=new String("nilesh-fc-com")

console.log(gameName.__proto__)
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('f'))

const newString=gameName.substring(-8,4)//doesnot include the last index i.e.4
console.log(newString)// substring treats negative indexes or keys as 0

const anotherString= gameName.slice(-5,9)
console.log(anotherString)// slice can have negative keys

// trim and replace methods
const newStringOne="   nilesh   "
console.log(newStringOne)
console.log(newStringOne.trim())

const url="https://nilesh.com/nilesh%20niraula"

const url1=url.replace('%20','-')
console.log(url1);

console.log(url.includes('nilesh1'))

// split based on -
console.log(gameName.split("-"));

