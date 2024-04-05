// const arrowFunction = (num1, num2) => {
//     let sum = num1 + num2;
//     console.log(sum);
// }


// let user = name =>{
//     return {
//         name:name
//     }
// }

// let user = name =>({name:name})
// console.log(user("Swati"));

// create object By using object literal
// let car1 = {
//     color:'blue',
//     brand:'Audi',
//     start:function(){
//         console.log("started")
//     }
// }

// let car2 = {
//     color:'red',
//     brand:'Tata',
//     start:function(){
//         console.log("started")
//     }
// }


// create object By using factory function
// function createobject(color, brand){
//     return{
//         color:color,
//         brand: brand,
//         start: function(){
//             console.log("Started");
//         }
//     }
   
// }

// let car1 = createobject("blue", "Audi");
// let car2 = createobject("red", "Tata");
// let car3 = createobject("yellow", "Swati");
    
// console.log(car1, car2, car3)


// create object by using constructor function
// function CreateObject(color, brand){
//     this.color = color,
//     this.brand = brand,
//     this.start = function(){
//         console.log("Started");
//     }
// }

// console.log(CreateObject.name)
// console.log(CreateObject.length)
// console.log(typeof CreateObject)

// let car1 = new CreateObject("Blue", "Tata");
// console.log(car1.constructor);//this gives function by which instace is created

// let car2 = new CreateObject("Red", "Audi");
// let car3 = new CreateObject("Yellow", "Farari");
// console.log(car1, car2);





// Create object by using classes
// class createObject{
//     constructor(color, brand){
//         this.color = color,
//         this.brand = brand,
//         this.start = function(){
//             console.log("Started");
//         }
//     }
// }

// let car1 = new createObject("Blue", "Tata");
// let car2 = new createObject("Red", "Audi");
// let car3 = new createObject("Yellow", "Farari");
// console.log(car1);
// console.log(car2);
// console.log(car3);


// let now = new Date("2024-03-20");
// console.log(now);
// console.log(typeof now);

// let date = new Date(1947, 7, 15, 5, 3, 15, 0);
// console.log(date);
// console.log(date.getFullYear());
// console.log(date.getMonth());
// date.setYear(1919);
// date.setMonth(9);
// console.log(date);

// let object = {
//     color: "Blue",
//     brand : "BMW",
//     start : function(){
//         console.log(this);
//     }
// }

// console.log(object);


// function start(){
//     console.log(this);
// }

// start();

console.log(this);