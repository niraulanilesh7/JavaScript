// Map is also a callback function 

const myNums=[1,2,3,4,5,6,7,8,9,10]

// const newNums=myNums.map( (num)=> { return num+10} )

// console.log(newNums);

// const Nums1=[]

// myNums.forEach( (item)=> {
//     Nums1.push(item+1)
// })

// console.log(Nums1)

const newNums=myNums
                .map( (num)=> num*10 )
                .map( (num)=> num+1)
                .filter( (num)=> num%3===0)

console.log(newNums);

