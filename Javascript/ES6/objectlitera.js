// let firstname = "Swati";
// let lastname = 'Kapgate';

// let person = {
//     firstname,
//     lastname
// }

// function createPerson(firstname, lastname, age) {
//     let fullname = firstname + " " + lastname;
//     return { 
//         firstname, 
//         lastname, 
//         fullname, 
//         isSenior(){
//             return age > 60;
//         }
//     };
// }

// let p = createPerson("Saurav", "Kapgate", 62);
// console.log(p.firstname);
// console.log(p.lastname);
// console.log(p.fullname); // Corrected typo in console.log
// console.log(p.isSenior());

// console.log(person.firstname);
// console.log(person.lastname);

// curly braces with the properties is called object literal
// ES 2015 provides Shand notation when we have object literals 
// 1. when the property name is same as value name the you can write any one of them
// you can ignore colon and keyword "function" while declaring function in object
// it is possible to have spaces in object properties, but we have to write propertiy in double quotes and while accessing it you can't use dot(.) notation, instead you have to use square braces
// you can also use variables as property names, while using you have to give it square braces []

let ln = "last name"

let person = {
    "first name": 'swati',
    [ln]:'Kapgate'
}

console.log(person);




