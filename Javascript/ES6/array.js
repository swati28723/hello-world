const fruits = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits.length;//returns length of the array
let temp = fruits.toString();//converts an array to a string of (comma separated) array values.
console.log(size);
console.log(temp);
console.log(fruits.at(2));//return 3rd element
console.log(fruits.join("-"));//join all array elements into a string, you can specify the separator, by default it takes (,) as separator
console.log(fruits.pop());//removes the last element from an array and returns the value that was popped out
console.log(fruits.push("kiwi"));//adds a new element to an array at the end and returns the new array length
console.log(fruits.shift());//removes the first array element and shifts all other elelments to a lower index. and returns the value that was shifted out
console.log(fruits.unshift("lemon"));//adds a new element at the beggining and unshifts older elements and returns the new array length
temp1 = fruits[fruits.length] = "kiwi";//provides an easy way to append a new element to an array at the end
console.log(fruits);

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const myChildren = myGirls.concat(myBoys);//concatenating two arrays, merging two arrays
console.log(myChildren);


// let array = Array.of(1, 2);//creates an array
// console.log(array);

// function translate() {
//     return Array.from(arguments, value => value + 1);
// }
// let numbers = translate(1, 2, 3);
// console.log(numbers);


// let numbers = [25, 30, 35, 40, 45];
// console.log(numbers.find(n => n > 33)); // 35 returns the value that matches a condition.
// console.log(numbers.findIndex(n => n > 33)); // 2  returns the index where the value was found.

// let numbers = [1, 2, 3, 4];
// numbers.fill(1); // [1, 1, 1, 1] Fills one or more array elements with a specific value.
// console.log(numbers);

// let numbers = [1, 2, 3, 4];
// numbers.copyWithin(2, 0); // [1, 2, 1, 2] Copies array element values from one part of an array to another.
// console.log(numbers);

// let buffer = new ArrayBuffer(10); //Represents a memory location and can be manipulated with views.
// console.log(buffer);
// view1 = new DataView(buffer);//cover all bytes
// view2 = new DataView(buffer, 5, 2);//cover bytes 5 and 6
// // console.log(buffer);
// console.log(view1.buffer === buffer);      // true
// console.log(view2.buffer === buffer);      // true
// console.log(view1.byteOffset);             // 0
// console.log(view2.byteOffset);             // 5
// console.log(view1.byteLength);             // 10
// console.log(view2.byteLength);             //2

// let ints = new Int16Array([25, 50]);//type array constructor
// ints[2] = 5;//does not increase array size
// let floats = new Float32Array(5);//type array constructor 
// console.log(ints, floats);
