//Set & Map


//set is used to remove all duplicate values from an array 
// set object lets you store unique values of any type whether primitive values or object references
// you can easily turn set back to an array that now contains only unique values using spread operator
const myArray = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
const mySet = new Set(myArray);

// console.log(mySet);
// console.log(myArray);

// const uniqueArray = [...mySet]
// console.log(uniqueArray);

// // adding an element to an set
// mySet.add(6);//adding a number
// mySet.add('a');//adding a string
// mySet.add({myName : "Swati"});//adding an object
// mySet.add([1, 2, 3]);//adding an array
// console.log(mySet);

// // deleting element
// mySet.delete(3);
// console.log(mySet)

// clear method
// mySet.clear();
// console.log(mySet);

// with 'has' method you can check a specific element exist in your set or not
console.log(mySet.has(6));

console.log(mySet.size);//It will retrun length of your set
// ************************************************************

// **Deference between an array and a set**
// an array is an ordered list of objects. You can access the elements of an array by referencng its integer position in the list(index) - myArray[3]
// A set is an unordered pool of unique elements so you can't access elements by its indexing, mySet[3] - it will throw an error
