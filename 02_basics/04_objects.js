// how to make objects singletons
const tinderuser={}// this is also a declaration of object--> non singleton obj

const tinderUser=new Object() // singleton object

tinderUser.id="123abc"
tinderUser.name="Hari"
tinderUser.isLoggedIn=false

console.log(tinderUser);

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Nilesh",
            lastname:"Niraula"
        }
    }
}

console.log(regularUser.fullname.userfullname);

//combining or merging objects

const obj1={
    1:"a",
    2:"b"
}
const obj2={
    3:"a",
    4:"b"
}

//const obj3={obj1,obj2} it gives object ubder object and doesnot combine

const obj3= Object.assign({},obj1,obj2)
// the first one in assign parameter is target and other afterwards are source
// when we target and source have same keys, value for key is of source
console.log(obj3);

const obj4={...obj1,...obj2}// we generally use spread operator for merging
console.log(obj4);

const users= [
    {
        id:1,
        email:"n@gmail.com"
    },
    {
        id:2,
        email:"nil@gmail.com"
    },
    {
        id:3,
        email:"nilesh@gmail.com"
    }
]

console.log(users[2].email);
console.log(tinderUser)
console.log(Object.keys(tinderUser))  //[ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser))//[ '123abc', 'Hari', false ] give array

console.log(Object.entries(tinderUser)) //[ [ 'id', '123abc' ], [ 'name', 
//  'Hari' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty("isLoggedI"));

