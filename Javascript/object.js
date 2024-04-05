let family = {
    mother: 'kavita',
    father: 'vinod',
    brother: 'saurav'
}
// console.log(typeof alien);
// console.log(family);
// console.log(family.mother); //(.) dot operator
// console.log(family['father']); //([]) square bracket

// this is example of complex object. We can say that complex object is object inside the object
// if we write any wrong name while printing, and we want that if it is exist then print it other don't. Then we can use (?) question mark.
// we can use (.) to print any deep 
// we can delete any element by using (delete) method
let alien = {
    name : 'swati',
    tech : 'JS',
    laptop : {
        cpu : 'i7',
        ram : 4,
        brand : 'asus'
    }
}

console.log(alien.laptop.brand1?.length);

// let laptop = {
//     cpu : 'i9',
//     ram : 16,
//     brand : 'HP',

//     greet: function(){
//         console.log('Hello World');
//     }
// }

// laptop.greet();

