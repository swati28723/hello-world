// const input = require("readline-sync");

// let n = input.questionInt("Enter length for array1: ");
// let array1 = []

// for (let i=0; i<n; i++)
// {
//     array1[i] = input.question("Enter something: ");
// }

// let m = input.questionInt("Enter length for array2: ");
// let array2 = []

// for (let i=0; i<m; i++)
// {
//     array2[i] = input.question("Enter something: ");
// }

// let p = input.questionInt("Enter length for array3: ");
// let array3 = []

// for (let i=0; i<p; i++)
// {
//     array3[i] = input.question("Enter something: ");
// }

let array1 = [1,2,3,'cat']
let array2 = [1,'cat',4]
let array3 = [1, 64]

let n = array1.length;
let m = array2.length;
let p = array3.length;

let array = [];
for (let i=0; i<n; i++)
{
    for (let j = 0; j<m; j++)
    {
        if (array1[i] == array2[j])
        {
            for (let k=0; k<p; k++)
            {
                if (array1[i]==array3[k])
                {
                    array.push(array3[k])
                }
            }
        }
    }
}

console.log(array);