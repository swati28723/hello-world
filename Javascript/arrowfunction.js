// anonymous function also called arrow function

// creating a arrow function
let greet = function(){
    console.log("Hello World");
    return 0;
}

console.log(greet());

// without mentioning 'function' keyword
let fnc = () => {
    console.log("Hello Everyone");
    return 0;
}

console.log(fnc());

// passing an argument
let greets = function(user){
    console.log("Hello " + user);
    return 0;
}

console.log(greets('Swati'));

// without mentioning 'function' keyword
let gree = (user) => {
    console.log("Hello " + user);
    return 0;
}

console.log(gree('SWati'));

// when you have only one statement you can write all code in one line as following
let add = (num1, num2) => num1 + num2;

let sum = add
let result = sum(5, 6);
console.log(result);

// let add = function(num1, num2) => {
//     return num1 + num2;
// }

// let sum = add
// let result  = sum(5, 6);
// console.log(sum);