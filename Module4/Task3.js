    const input = require("readline-sync");

let s = input.question("Enter a String: ");
let start = input.questionInt("Enter start point: ");
let end = input.questionInt("Enter end point: ");

let new_s = s.split("");
for (let i = start; i <= end; i++)
{
    if (new_s[i] === '1')
    {
        new_s[i] = '0';
    }
    else
    {
        new_s[i] = '1';
    }
}

console.log(new_s.join(""));