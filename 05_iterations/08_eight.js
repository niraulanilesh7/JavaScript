// Reduce Method

const myNums=[1,2,3]

// const myTotal=myNums.reduce(function(acc,currVal){
//     console.log(`acc: ${acc} and currVal:${currVal}`);
//     return acc+currVal;
// },10)

const myTotal=myNums.reduce( (acc,currVal)=> acc+currVal,10 )

console.log(myTotal);

const shoppingCart=[
    {
        itemName:"js course",
        price:299
    },
    {
        itemName:"py course",
        price:199
    },
    {
        itemName:"java course",
        price:399
    },
    {
        itemName:"android course",
        price:799
    },
    {
        itemName:"datascience course",
        price:1299
    }
]

const total=shoppingCart.reduce( (acc,cur)=> acc+cur.price,0)

console.log(total);

