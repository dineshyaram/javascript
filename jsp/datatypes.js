"use strict"; // treat all javascript code as newer version 

// alert(3+3)  // we are using node.js not windows console ( that why we get error if we want use here )
 
// Datatypes:
console.log(2e53);

/* number --> 2 to power 53 
   string --> string respresent  "" or '' in javascript
   bigint  --> is used for bigger value 
   boolean --> true or false
   undefined --> type of is undefined
   null --> type is object
   symbol --> 

*/
// above all are primitive datatype (stores in "STACK" memory)
 
/* 
points on priitive :
1) if you declare a variable it change in copy(not the original one) then stores in stack memory
*/
// example :
let name = "dinesh"
let newName = name
newName = "kanna"
console.log(name);
console.log(newName);



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// arrays ,object & functions are non primitive datatypes  (stores in "heap" memory)
/* 
points on priitive :
1) in this if declare variable stores in heap memory and change in referance(original value)
*/
let userOne = {
   email : '@gmail.com',
   upino : '12345678@ybl'
   
}
console.log(userOne);
// in this  given userone store in stack and the value of it store in  heap memory that mean 
//                                         we are giving referance the value in heap memory