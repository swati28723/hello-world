// // const input = require("readline-sync");

// // let n = input.questionInt("Enter length of array1: ");
// // let array1 = [];
// // for (let i = 0; i<n; i++)
// // {
// //     array1[i] = input.questionInt("Enter a number: ");
// // }

// // let m = input.questionInt("Enter length of array2: ");
// // let array2 = [];
// // for (let i = 0; i<m; i++)
// // {
// //     array2[i] = input.questionInt("Enter a number: ");
// // }

// let array1 = [];
// let array2 = [4, 5, 6, 7, 3];

// let n = array1.length;
// let m = array2.length;

// let array3 = [];
// let array3Count = 0;
// for (let i = 0; i<n; i++)
// {
//     for (let j = 0; j<m; j++)
//     {
//         if (array1[i] == array2[j])
//         {
//             array3[array3Count] = array1[i];
//             array3Count++;
//         }
//     }
// }

// console.log(array3);

// // marks - 20


var arr1 = [1, 1, 2, 3, 5, 2];
var arr2 = [1, 2, 3, 4, 5, 2];
var arr3 = [];
var a = 0;
for(var i=0; i<6; i++){
    if(arr2.includes(arr1[i])){
        arr3[a]= arr1[i];
        a++;
    }

}
console.log(arr3);