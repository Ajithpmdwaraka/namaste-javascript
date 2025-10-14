const radius = [2, 4, 6, 8];

const area = (radius) => {
    return radius.map((r) => Math.PI * r * r);
}

const circumference = (radius) => {
    return radius.map((r) => 2 * Math.PI * r);
}

const diameter = (radius) => {
    return radius.map((r) => 2 * r);
}

console.log(area(radius));
console.log(circumference(radius));
console.log(diameter(radius));

// const calculateArea = (radius) => {

//     const output = [];
//     for (let i = 0; i < radius.length; i++){
//         output.push(Math.PI * radius[i] * radius[i]);
//     }
//     return output;
    
// }

// console.log(calculateArea(radius));

