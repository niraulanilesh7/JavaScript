// There are two types of memory : Stack(Primitive) and Heap(Non-Primitive)

let myYoutubeName="Youtube Mix"

let anotherName= myYoutubeName;
anotherName="Coding and Electronics"

console.log(anotherName);
console.log(myYoutubeName);

let user1={
    email:"user@gmail.com",
    pass:"12345"
}
let user2=user1;

console.log(user1)

user2.email="user2@gmail.com"

console.log(user1)



