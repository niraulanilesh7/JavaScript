const myObject={
    js:"Javascript",
    cpp:"C++",
    rb:"Ruby",
    'swift':"Swift by Apple"
}

for (const key in myObject) {
    
        console.log(key,' shortcut is for ',myObject[key]);
        
    }

const programming=['js','rb','py','java','cpp']

for (const key in programming) {  // it gives the index not values for array
        console.log(programming[key]);
    }

const map= new Map()
map.set('IN',"India")
map.set("US","United States of America")
map.set("Fr","France")
map.set('IN',"India")

// for (const key in map) { // map is not iterable so we cannot write it in loop like this, we will not get error but neither get output
//         console.log(key); 
//     }

