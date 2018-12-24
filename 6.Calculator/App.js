var call  =require('./Sum');
var call_1  =require('./Substraction');
var call_2  =require('./Multiplication');
var call_3  =require('./Division');

var add =call.addNumbers(20,4);
var substract =call_1.substractNumbers(20,4);
var multiply =call_2.multiplyNumbers(20,4);
var divide =call_3.divideNumbers(20,4);

console.log("The Sum Of 20 & 4 is :"+add);
console.log("The Substraction Of 20 & 4 is :"+substract);
console.log("The Multiplication Of 20 & 4 is :"+multiply);
console.log("The Division Of 20 & 4 is :"+divide);
