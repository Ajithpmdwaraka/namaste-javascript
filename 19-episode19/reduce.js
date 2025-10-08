//Reduce() reduces an array to a single value based on a reducer function
const num = [2, 3, 4, 5];
const sum = num.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum);
const product = num.reduce((accumulator, current) => accumulator * current, 1);
console.log(product);

const arr = [1, 2, 3, 4];

// function sum1(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++){
//         sum = sum + arr[i];
//     }
//     return sum;
// }

// console.log(sum1(arr));

const sum1 = arr.reduce((accumulator, current) => accumulator + current, 0);