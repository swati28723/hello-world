const input = require("readline-sync");

let n = input.questionInt("Enter a Number: ");
let array = [];
let sum = [];
let temp = 0;

for (let i=0; i<n; i++)
{
    array[i] = input.questionFloat("Enter a Number: ");
    temp = temp + array[i]
    sum[i] = temp;
}

console.log(array, sum);