//symbol is a primitive data type
//when you are using symbol it will a unique, suppose I am taking two symbols with same name and if I check they both are same, it will give false
//Before symbol it is hard to create unique keys with primitive data type, and with symbol it is very easy
//Symbol is use to generate a unique primitive
//you can access k1 or k2 by using dot notation or double quotes inside square brackets myObj.k1 or myObj["k2"] if you are doing this the object going to search for which is k1 named string which will be not mentioned in object at all
//symbols are ingnored in for in loop
const sym1 = Symbol('My Identifier');
const sym2 = Symbol('My Identifier');

console.log(sym1 === sym2)//it will return false

const k1 = Symbol('Hi');
const k2 = Symbol('Hello');

myObj = {};
myObj[k1] = 'Swati';
myObj[k2] = 'Saurav';
myObj["name"] = "Good Boy";
myObj[4] = "Good int"

console.log(myObj)
console.log(myObj[k1])
console.log(myObj[k2])

for (key in myObj){
    console.log(key, myObj[key]);
}

console.log(JSON.stringify(myObj));