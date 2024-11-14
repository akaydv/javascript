//on the basis of how data is stored/kept in memory and accessed is categorised in two types i.e ==>>primitive and non-primitive
// primitive --> 7 types
/*
string 
number
boolean
null=>>it is empty and not zero
undefined
symbol -->>it is used to make any value unique 
bigint--> to store very big value



*/
const score=100  //number
const scoreValue=100.3 //number
const isLoggedIn=false //boolean
const outsideTemp=null 
let userEmail; //undefined
const id=Symbol("123") //symbol


const anotherId=Symbol("123") 
console.log(id===anotherId); //both are not equal

const bigNumber = 536576787887675564897323n // whenever we use bigint at last we write n 
console.log(bigNumber);


// refrence (Non-primitive)
// array,objects,functions

const heros=["shaktiman","naagraj","doga","ironman"]   //array

console.log(heros);

//object {}
let myObj={
    name:"akash",
    age:20,
    marks:199,
    roll_no:38
}
console.log(myObj);

const myFunction=function(){
    console.log("hello world");
    
}

console.log(typeof bigNumber); //bigint
console.log(typeof myFunction); //function

const fruits = ["Banana", "Orange", "Apple"];
console.log(typeof fruits); //object


