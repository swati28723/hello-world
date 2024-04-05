// Reset & Spread
//Example Reset
// In rest elements which we are pasing are combining
// After 3 dots you can give any name. and with the help of it without passsing any argument you can pass as many numbers as you want
function addnumbers(a, b, c, ...other)//reset operator(...)
{
    // console.log(other);//it will print only number which don't have argument means 7 and 8 only in an array
    //console.log(arguments)//it is from ES5 it will print whole numbers in the form of array
    return a+b+c;
}

const res = addnumbers(2,5,6, 7, 8)
console.log(res)

// Spread 
// It is breaking element. You can print as you want by passing arguments
// its advantage is I have four element in my array, but I am passing only 3 of them, still it is not throwing any error 
var names = ['swati', 'sauru', 'loku', 'viji'];

function getNames(name1, name2, name3){
    console.log(name1, name2, name3)
}

// getNames(names[0], names[1], names[2]);//you can do this also 
getNames(...names)//but this is the best method and it is also syntax of the Spreads
// getNames(names)//you can do this also 


//On Object
//Rest
var students = {
    name:'swati',
    age:19,
    hobbies:['dancing', 'singing']
}

// const age = students.age;//in simple 
const {...rest} = students;//destructuring
console.log(rest);


//Spread
var newStudent = {
    ...students,//coping one object to another one
    age: '29'//overwriting age, means changing
}

console.log(newStudent)