// for of loop

const arr=[1,2,3,4,5]

for (const num of arr) {
    console.log(num);
}

const greetings="Hello World!"

for (const greet of greetings) {
    if(greet===" "){
       continue; 
    }
    console.log(`Each char is ${greet}`);
}

// Maps --> similar to objects but somewhat different, no duplication allowed

const map= new Map()
map.set('IN',"India")
map.set("US","United States of America")
map.set("Fr","France")
map.set('IN',"India") // No dupilacate value is added

console.log(map);

for (const [key,value] of map) {
    console.log(key,":-",value);
}


const myObject={  // objects arenot iterable in js
    'game1':"NFS",
    'game2':"Spiderman"
}

// for (const [key,value] of myObject) {
//     console.log(key,":-",value);
// }