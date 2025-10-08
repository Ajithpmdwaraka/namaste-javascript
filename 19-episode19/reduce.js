//Reduce() reduces an array to a single value based on a reducer function
const num = [2, 3, 4, 5];
const sum = num.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum);
const product = num.reduce((accumulator, current) => accumulator * current, 1);
console.log(product);