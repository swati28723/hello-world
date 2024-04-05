// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(array[1]);

// let array2d = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// console.log(array2d[1][2]);

// Input in a array
// const input = require("readline-sync")

// let arr = [];
// let idx = 0;
// while (idx < 5)
// {
//     arr[idx] = input.question();

//     idx += 1;
// }

//Input in a 2d array
const input = require("readline-sync")

let arr2d = [];
let i = 0, j = 0;
while (i <= 5)
{
    arr2d[i] = [];
    j = 0;
    while (j < 5)
    {
        arr2d[i][j] = input.question();
        j += 1;
    }
    i += 1;
}