// stack-->>primitive(In this its creates copy )
// in stack values are stored one above other
// primitives data types values goes into stack and non-primitive goes to heap


let myName="akash"
let anothername=myName

anothername="harry"
console.log(myName);
console.log(anothername);











// heap-->>non primitive(it creates Reference)  
/* meaning ==>>two variables can refer to the same object, as Anton Böhler mentioned. For example, 

  Sololearner sl1 = new Sololearner();
  Sololearner sl2 = sl1;

Here, both sl1 and sl2 refer to the same instance of the Sololearner class.
*/


let user1={
    name:"rohityadav",
    age:23,
    email:"user4314gmail@.com",
    upi:"userybl"
}
let user2=user1;
user2.email="akash1454@gmail.com"
console.log(user1.email);
console.log(user2.email);

