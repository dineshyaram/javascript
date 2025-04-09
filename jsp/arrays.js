//arrays
const myArray = [1, 2, 3, 4, 5];
const myArray2 = ["a" ,"b", "c", "d", "e"];
const myArray3  = new Array(1, 2, 3, 4, 5);
console.log(myArray[2]); // Output: 3
console.log(myArray2[2]); 
//array methods
myArray.push(7);
console.log(myArray);


const newArr = myArray.join()
console.log(newArr); 
console.log(typeof newArr); 



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// slice and splice
const arr = [1,2,3,4, 5];
console.log("1" , arr); // Output: [1, 2, 3, 4, 5]

const sliceArr = arr.slice(0,3);
console.log("2" , sliceArr); // Output: [1, 2, 3]
console.log("2" , arr); // Output: [1, 2, 3, 4, 5]

const spliceArr = arr.splice(0,3);// it give value  as you specified from 0,3 as you ask
console.log("3" , spliceArr); // Output: [1, 2,3]
console.log("3" , arr); // Output: [4, 5] // here we get 4,5 because we remove 0,1,2 index 
//                        using splice then those are premenently removed so we get only 4,5
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++








// // Define an array
// const fruits = ['Apple', 'Banana', 'Cherry', 'Date'];

// // Print each fruit in the array
// fruits.forEach((fruit) => {
//     console.log(fruit);
// });