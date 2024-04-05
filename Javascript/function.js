// Creating a function
// function greet(){
//     console.log("Hello World");
// }

// greet(); //calling a function

// storing return value from function in a variable
// function greet ()
// {
//     return "Hello World";
// }
// let str = greet();
// console.log(str);


// Passing a value to function
function greet(user)
{
    return `Hello ${user}!`; //template literal(``)
}

let user = "Navin";
let str = greet(user);
console.log(str);
