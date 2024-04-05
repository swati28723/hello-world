// let memberStatus = prompt("Enter membership status: ").toLowerCase();
// let purchaseAmount = parseFloat(prompt("Enter purchase amount: $"));
// let discount = 0;

// if (memberStatus === "gold" && purchaseAmount > 50) {
//     discount = 0.15;
// } else if (memberStatus === "silver" && purchaseAmount > 75) {
//     discount = 0.10;
// } else if (memberStatus === "regular" && purchaseAmount > 100) {
//     discount = 0.05;
// } else if (memberStatus === "non-member" && purchaseAmount > 150) {
//     discount = 5;
// }

// let finalAmount = purchaseAmount - (purchaseAmount * discount);

// console.log("Final bill amount after discount: $" + finalAmount);

//**Problem 1**
// const input = require("readline-sync");

// let memberStatus = input.question().toLowerCase();
// let purchaseAmount = input.questionInt();
// let discount = 0;

// if (memberStatus == 'gold' && purchaseAmount > 50)
// {
//     discount = 0.15;
// }
// else if (memberStatus == 'silver' && purchaseAmount > 75)
// {
//     discount = 0.10;
// }
// else if (memberStatus == 'regular' && purchaseAmount > 100)
// {
//     discount = 0.05;
// }
// else if (memberStatus == 'non-member' && purchaseAmount > 150)
// {
//     discount = 5;
// }

// let finalAmount = purchaseAmount - (purchaseAmount * discount);
// console.log(finalAmount);



// **Problem 2**
const input = require("readline-sync");

let year = input.questionInt("Enter a year: ");

if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0)
{
    console.log(year + " is ia leap year.");
}
else
{
    console.log(year + " is not a leap year.");
}
