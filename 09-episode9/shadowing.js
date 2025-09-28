var a = 20;
{
    var a = 40;
}

console.log(a); // output : 40 This is not shadowing

let a = 20;
{
    let a = 40;
}
console.log(a); // Output : 20; This is called shadowing

let a = 20;
{
    var a = 40; 
}
console.log(a); //Syntax Error This is illegal Shadowing

var a = 20;
{
    let a = 40; 
}
console.log(a); // Output : 20; This is called shadowing



