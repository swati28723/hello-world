const input = require("readline-sync");

let temperature = input.questionFloat("Enter temperature: ");
let rainStatus = input.questionInt("Enter rain status: ");

let fahrenheite = (temperature * 9/5) + 32;

if (rainStatus == 1)
{
    if (fahrenheite < 50)
    {
        console.log("Wear a heavy coat and bring an umbrella.");
    }
    else if (fahrenheite >= 50 && fahrenheite < 68)
    {
        console.log("Wear a light jacket and bring an umbrella.");
    }
    else
    {
        console.log("Wear light clothing and bring an umbrella.");
    }
}
else
{
    if (fahrenheite < 50)
    {
        console.log("Wear a heavy coat.");
    }
    else if (fahrenheite >= 50 && fahrenheite < 68)
    {
        console.log("Wear a light jacket");
    }
    else
    {
        console.log("Wear light clothing.");
    }
}

