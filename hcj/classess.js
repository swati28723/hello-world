// const car = {
//     name:"Audi",
//     brand:"Audi",
//     start: function st() {
//         console.log(this);
//     }
// }


// car.start();

// function start() {
//     console.log(this);
// }

// start();

// const start = () => {
//     console.log(this);
// }

// start();

// let temp = new Array("Swati", "Saurav", 1);
// temp.push(2);
// console.log(temp.length);
// console.log(temp.prototype)


// let myFunction = new Function('color', 'brand', `
//     this.color = color;
//     this.brand = brand;
//     this.start = function() {
//         console.log("started");
//     };
// `);

// let newFunction = new myFunction("red", "audi");

// console.log(newFunction.color);

// console.log(Object.getPrototypeOf(myFunction));


// function addNumbers(a, b) {
//     return a + b;
// }
// undefined
// console.log(addNumbers.prototype)

// class Person {
//     constructor(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }

//     displayFullName(){
//         return this.firstName + " " + this.lastName;
//     }

// }

// let temp = new Person("Swati", "Kapgate");
// console.log(temp);
// console.log(temp.firstName);
// console.log(temp.displayFullName());

// class Employee {
//     constructor(firstName, lastName, salary, age) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.salary = salary;
//         this.age = age;
//     }

//     isBonus(){
//         if (this.age > 50 )
//         {
//             return this.salary + ((5/100) * this.salary);
//         }
//         return this.salary;
//     }
// }

// let swati = new Employee("Swati", "Kapgate", 5000, 50);
// console.log(swati.isBonus()); 

// class Animal {
//     constructor(name) {
//         this.name = name;
//     }

//     eat() {
//         console.log(`${this.name} is eating`);
//     }

//     makeSound(){
//         console.log(`${this.name} is shouting`);
//     }
// }

// let lion = new Animal("Lion");
// lion.eat(); 
// lion.makeSound();

// let dog1 = new Animal("Puppy");
// console.log(dog1.name);

// class Dog extends Animal{
//     constructor(name, breed){
//         super(name);
//         this.breed = breed;
//     }

//     sniff(){
//         return `${this.name} will sniff`;
//     }

//     eat(){
//         return `Name of dog is ${this.name}`;
//     }
// }

// let Dog1 = new Dog("Snoopy", "Germansnoopy")
// console.log(Dog1);
// console.log(Dog1.name);
// console.log(Dog1.breed);
// Dog1.makeSound();
// console.log(Dog1.eat());

// class Bird{
//     intro(){
//         return "There are many types of birds"
//     }

//     flight(){
//         return "Most of the bird can fly but some  cannot"
//     }
// }

// class Sparrow extends Bird{
//     flight(){
//         return "Sparrow can fly"
//     }
// }

// class Ostrich extends Bird{
//     flight(){
//         return "Ostrich cannot fly"
//     }
// }

// let bird = new Bird()
// let sparrow = new Sparrow()
// let ostrich = new Ostrich()
// console.log(bird.intro());
// console.log(sparrow.intro());
// console.log(ostrich.intro());
// console.log(bird.flight());
// console.log(sparrow.flight());
// console.log(ostrich.flight());



// alert("First");
// alert("Second");
// alert("Third");

import fetch from 'node-fetch';

let url = "https://api.github.com/";
fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((jsondata) => {
        console.log(jsondata);
    });
console.log("vinay");