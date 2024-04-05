const input = require("readline-sync");

let n = input.questionInt("Enter a number: ");
let sum = 0;

for (let i = 1; i<n; i++)
{
    if (n % i ==0)
    {
        sum += i;
    }
}

if (sum == n)
{
    console.log("Perfect");
}
else
{
    console.log("Not Perfect");
}

// marks - 20