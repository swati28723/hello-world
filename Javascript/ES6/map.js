// Javascript Map 
// Map object holds key value pairs and remebers the original insertion order of the keys. any value both objects and primitive values may be used as either a key or a value
// allows you to map arbitary values to other values 

// Defining a map
// const myMap = new Map([['name', 'Swati'], ['surname', 'Kapgate']])

// console.log(myMap);


// Javascript objects only support one key object. If we add a multiple key objects it only remembers the last one that's why we need to use maps

// const myObject = {};

// const a = {};
// const b = {};

// myObject[a] = 'a';
// myObject[b] = 'b';

// a map keeps track of both key objects which is different and it is solving a problem we had previously 
// const myMap = new Map([[{}, 'a'], [{}, 'b']]);

// myMap.set({}, 'c');//adding a key value to map, you can add numbers, string, array

const myMap = new Map ([[1, 'one'], [2, 'two']]);

// myMap.delete(1);//deleting a eement with its key

// myMap.clear();//it wil clear all map

// console.log(myMap.has(1));//checking if a specific key exist in you map or not. If you  give any value to it it will return false because it is searching by keys

console.log(myMap.size);//size simply outputs the number of elements that our map has
