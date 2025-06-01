//Dates

let myDate= new Date()
console.log(myDate.toString()); //Sun Jun 01 2025 08:32:39 GMT+0000 
// (Coordinated Universal Time)
console.log(myDate.toDateString());//Sun Jun 01 2025
console.log(myDate.toISOString());//2025-06-01T08:32:39.902Z
console.log(myDate.toLocaleString());
console.log(typeof myDate);// type of date is object

let myCreatedDate= new  Date(2023,0,23) // months start from 0 ie january23,2023
console.log(myCreatedDate.toDateString());

let myCreatedDate1= new  Date(2023,0,23,5,3)
console.log(myCreatedDate1.toLocaleString());

let myCreatedDate2= new  Date("2025-06-01")
console.log(myCreatedDate2.toDateString());

let myCreatedDate3= new  Date("06-01-2025")
console.log(myCreatedDate3.toDateString());

let myTimeStamp= Date.now() // cannot be use with new date.now()- not a 
//constructor
console.log(myTimeStamp);

console.log(myCreatedDate.getTime())

console.log(Math.floor(Date.now()/1000)); //in seconds

let newDate= new Date()
console.log(newDate)
console.log(newDate.getDate())
console.log((newDate.getMonth())+1)
console.log(newDate.getDay())

// `${newDate.getDay()} and the time is ${newDate.getTime()}`

console.log(newDate.toLocaleString('default',{
    weekday:"long",
    timeZone:"Asia/Kathmandu",
    year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
}))