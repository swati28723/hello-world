// Destructuring is what you want to do is you take the element you want to destructure and you put that on the right side of the equal sign 
// While destructuring an array we use square brackets for destrucuturing
// const alphabet = ['A', 'B', 'C', 'D', 'E', 'F']
// const numbers = [1, 2, 3, 4, 5, 6]

// // if I want to print A and B so what I will do I am simply write alphabet[0] and alpphabet[1] but in desrtucturing I can write same thing as follow
// // const [a, b] = alphabet;  
// // const [a, , c] = alphabet //it will skip B and print A and C
// // const[a, b, ...rest] = alphabet//it will print all elements in alphabet
// // const newArray = [...alphabet, ...numbers]//adding two arrays in a new one by rest method
// const newArray = alphabet.concat(numbers)//another method to join two arrays

// console.log(newArray)

// function sumAndMultiply(a, b){
//     return [a+b, a*b, a/b]
// }

// const [sum, multiply, division = 'No division'] = sumAndMultiply(2, 3)// you set 'No division' as a defaultvalue for division if you do not pass any arguments there it will by default print 'No division'

// console.log(sum, multiply, division);


// ***************************************************


// Object Destructuring
// While destructuring an object we use curly braces to destructure
const person1 = {
    name :'Swati',
    age : 19,
    favoritefood : 'Rice',
    address : {
        city : 'somewhere',
        state : 'some of them'
    }
}

const person2 = {
    name : 'Saurav',
    age : 17,
    address : {
        city : 'somewhere else',
        state : 'another one of them'
    }
}

// const {name : firstname = 'John', age} = person1// if you want to use another name instead of name in object so you can do this 
// const {favouritefood = 'Rice', age} = person1//you can use default value here
// const {name, ...rest} = person1//using spread operator
// const {address: {city}} = person1//you can destructure nested object also
// const person3 = {...person1, ...person2}//adding two objcts in new one
// console.log(person3);

function printuser({name, age, favoritefood = 'Watermelon'}){
    console.log(`Name is: ${name}. Age is ${age}. Food is ${favoritefood}`)
}

// function printuser({name}){
//     console.log(`Name is ${name}`)
// }

printuser(person1)