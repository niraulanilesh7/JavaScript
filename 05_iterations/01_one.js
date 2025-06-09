// For loop

for (let i = 0; i <= 10; i++) {  // press ctrl+d for duplicate
    const element = i;
    if(element==5){
        console.log("We have reached 5th i")
    }
    console.log(element);
}

for (let i = 1; i <= 10; i++) {
    console.log(`Outer loop value${i}`);
    for (let j = 1; j < 10; j++) {
        //console.log(`Inner loop value ${j} and outer loop ${i}`);
        console.log(i+'*'+j+'='+i*j);
    } 
}
let myArray=["flash","Superman","Batman"]

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(element);
    
}

// Break and Continue

for (let i = 0; i <=20; i++) {
    if(i==5){
        console.log('Detected 5');
        break; // gets out of the loop or scope
        
    }
    console.log(`Value of i is ${i}`);
}
for (let i = 0; i <=20; i++) {
    if(i==5){
        console.log('Detected 5');
        continue // skips current index or iteration
        
    }
    console.log(`Value of i is ${i}`);
}