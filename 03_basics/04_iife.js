// Immediately Invoked Function Expressions (IIFE)
// It is used when the function should not be polluted from global scope
// And when we need to immediately execute a function after we write function

(function chiya(){ // This is a named iffe another is simple or unnamed iffe
    console.log("DB Connected");
})(); // should include ; for ending iife function, it doesnot when to stop the context 
((name) => {
    console.log(`DB connected 2 ${name}`);
    
})("Nilesh"); // first parenthesis is for function defination and second is for execution


