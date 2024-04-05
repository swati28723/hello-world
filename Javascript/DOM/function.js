// Function declaration
//A function expression is similar to a function declaration without the function name. 
// we can't get output from expression function if we want to print before assig
const dosomething1 = function()
{
    console.log("dosomething1");
}


function dosomething2()
{
    console.log("dosomething2");
}

// const array = [1, 2, 3, 4, 5]

// array.forEach(function log(item){
//     console.log(item)
// })

arrowfunction()

const arrowfunction = (args) => {
    console.log("arrow function")
}

// Function expression are anonymous function, where you use the function keyword without a name and you can assign that to a variable
// Function declarations are named functions where you declare the name after the function keyword while