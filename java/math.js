const score = 400 //java auto detects as it is a number

const balance=new Number(100) //Using Number Function to explicitly define number in JS
// console.log(balance);
// console.log(score);

// console.log(balance.toString().length);
// console.log(typeof balance);
// console.log(typeof score);
// console.log(balance.toFixed(2));

const otherName=123.876
// console.log(otherName.toPrecision(3));
// console.log(otherName.toPrecision(1));
// console.log(otherName.toPrecision(4));
const hundreds=10000000000
// console.log(hundreds.toLocaleString('en-IN'));


//*****************__________maths________****************


// console.log(Math.abs(-4));//it converts -ve value to +ve and if value is already positive it will return the same

// console.log(Math.round(34.89));
// console.log(Math.ceil(3.2));//output 4
// console.log(Math.floor(4.9));//4 -->>round-off to the lowest value
// console.log(Math.min(3,4,5,78,8));
// console.log(Math.max(3,4,5,78,8));
// console.log(Math.random());// math.random ==>>gives values between 0(inclusive) to 1(exclusive)
// console.log(Math.random()*10) //we have multiplied with 10 so that it pushes values to left side
// console.log((Math.random()*10)+1) 
// console.log(Math.floor(Math.random()*10)+1)

const min=10
const max=20

console.log(Math.floor(Math.random() * (max - min + 1))+min)//values 