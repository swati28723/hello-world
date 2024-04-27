const input = require('readline-sync')

let b = input.questionInt("Enter Budget: ");
let q = input.questionInt("Enter desired quantity: ");

let mn = 100000000000;
let mn_index = 0;

for (let i = 0; i<5; i++)
{
    let p = input.questionInt("Enter Price: ")
    let r = input.questionInt("Enter available quantity: ")

    if (r >= q && (p*q) <= b)
    {
        if (p < mn)
        {
            mn = p;
            mn_index = i + 1;
        }
    }
}

console.log(mn_index);