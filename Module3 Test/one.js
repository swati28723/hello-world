const input = require("readline-sync");

let a, b, c;
a = input.questionInt("Enter a number: ");
b = input.questionInt("Enter a number: ");
c = input.questionInt("Enter a number: ");

if (a==b && b==c)
{
    console.log(a*b*c);
}
else if (a==b && b!=c)
{
    console.log((a+b)%c);
}
else if (a!=b && b!=c && c!=a)
{
    let temp = Math.max(a, b, c);
    console.log(temp*temp);
}

// marks - 10