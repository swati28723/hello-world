const input = require("readline-sync");

let t = input.questionInt("Enter testcases: ");

for (let i = 0; i < t; i++)
{
    let m = input.questionInt("Enter threshold value: ");
    let n = input.questionInt("Enter a number of Items: ");

    let temp = 0;
    for (let j = 0; j < n; j++)
    {
        let s = input.question("Enter name of item: ");
        let q = input.questionInt("Enter quantity: ");
        let p = input.questionFloat("Enter price: ");
        temp = temp + (q*p);
        console.log(temp);
    }

    if (temp > m)
    {
        let tp = temp - ((10/100) * temp);
        console.log(tp);
    }
    else
    {
        console.log(temp);
    }
}