//dates
let myDate=new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

let myCreatedDate = new Date(2023,0,23)//in array month start from 0
// console.log(myCreatedDate.toDateString());
let myNewDate = new Date(2023,1,23,5,4)
// console.log(myNewDate.toLocaleString());
// let mysecDate=new Date("2023-01-14")//here month start from 1
let mysecDate=new Date("01-14-2024")
// console.log(mysecDate.toLocaleString());
let myTimeStamp = Date.now()// returns the number of milliseconds since January 1, 1970.
// console.log(mysecDate.getTime());
// console.log(Date.now()/1000);// it gives seconds value in decimal so we will use maths function to avoid this
// console.log(Math.floor(Date.now()/1000))
let newDate=new Date()
// console.log(newDate);
// console.log(newDate.getDate());
// console.log(newDate.getDay());
// console.log(newDate.getMinutes());
// console.log(newDate.getTime());
// console.log(newDate.getFullYear());
console.log(newDate.getMonth()+1);

// ` ${newDate.getDay()} and the time `
newDate.toLocaleString('default',{weekday:"long"})