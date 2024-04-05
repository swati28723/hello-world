const input = require("readline-sync");

let n = input.questionInt("Enter a Number: ");
let array = []

for (let i=0; i<n; i++)
{
    array[i] = input.questionFloat("Enter a Number: ");
}

let min = array[0], max = array[0];

for (let i=1; i<n; i++)
{
    if (array[i] < min)
    {
        min = array[i];
    }
    if (array[i] > max)
    {
        max = array[i]
    }
}

console.log("min: " + min + ", " + "max: " + max);

