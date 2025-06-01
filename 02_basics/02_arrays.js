const marvelHeros=["Thor","Ironman","Spiderman"]
const dcHeros=["Superman","Batman","Flash"]

// marvelHeros.push(dcHeros)// takes arrays as a data itself
// console.log(marvelHeros);
// console.log(marvelHeros[3][1]);

marvelHeros.concat(dcHeros)// merge two or more arrays but doesnot change
// original array  
console.log(marvelHeros);
console.log(marvelHeros.concat(dcHeros));

const all_new_heros= [...marvelHeros, ...dcHeros] // ... => spread operator
console.log(all_new_heros);

const anotherArray=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const realAnotherArray=anotherArray.flat(Infinity)
// returns all subarray elements as element of array
console.log(realAnotherArray);

console.log(Array.isArray("Nilesh"))
console.log(Array.from("Nilesh"));//[ 'N', 'i', 'l', 'e', 's', 'h' ]
console.log(Array.from({name:"Nilesh"}));// gives empty array
// should specifies what to make an array ie key, value 

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));

//Read more about isArray,from and of methods of array


