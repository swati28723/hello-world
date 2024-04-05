
// (!counts[name]) - count the type of datatype
// let input = require("readline-sync");

// let array = [1, true, "hello", [], {}, undefined, function(){}];
// let n = array.length;
// let b = 0, f = 0, num = 0, o = 0, s = 0, u = 0;

// for (let i = 0; i<n; i++)
// {
//     if (typeof array[i] == 'function')
//     {
//         f++;
//     }
//     else if (typeof array[i] == 'number')
//     {
//         num++;
//     }
//     else if (typeof array[i] == 'boolean')
//     {
//         b++;
//     }
//     else if (typeof array[i] == 'object')
//     {
//         o++
//     }
//     else if (typeof array[i] == 'string')
//     {
//         s++;
//     }
//     else if (typeof array[i] == 'undefined')
//     {
//         u++;
//     }
// }

// console.log("Boolean:" + b + "\nFunction:" + f + "\nObject:" + o + "\nNumber:" + num + "\nString:" + s + "\nUndefined:" + u);





let input = require("readline-sync");

let array = [1, true, "hello", [], {}, undefined];
let n = array.length;
let counts = {}; 

for (let i = 0; i < n; i++) 
{
    let type = typeof array[i];
    if (!counts[type]) 
    {
        counts[type] = 1;
    } else 
    {
        counts[type]++; 
    }
}

for (let type in counts) {
    console.log(type + ": " + counts[type]);
}