//Filter() filters out elements based on a condition and returns a new array
const numbers = [2, 3, 4, 5, 6, 7, 8, 9];
const even = numbers.filter((n) => n % 2 === 0);
const odd = numbers.filter((n) => n % 2 !== 0);
console.log(even);
console.log(odd);

