const input = require("readline-sync");

let n = input.questionInt("Enter a Number: ");
let array = []

for (let i = 0; i<n; i++)
{
    array[i] = []
    for (let j = 0; j<n; j++)
    {
        array[i][j] = 0;
    }
}

let num = 1, temp = 1, i = 0, z = 0, g = 0;

while (num <= n*n)
{
    if (temp == 1)
    {
        for (let j=i; j<n-i; j++)
        {
            array[i][j] = num;
            num++;
        }
        i++;
        temp = 2;
    }
    
    else if (temp == 2)
    {
        let col = n-i;
        for (let j=i; j<=col; j++)
        {
            array[j][col] = num;
            num++;
        }
        temp = 3;
    }
    

    else if (temp == 3)
    {
        let row = n-i;
        for (let j=n-i-1; j>=z; j--)
        {
            array[row][j] = num;
            num++;
        }
        z++;
        temp = 4;
    }

    else
    {
        let col = g;
        for (let j=n-i-1; j>g; j--)
        {
            array[j][col] = num;
            num++;
        }
        g++;
        temp = 1;
    }
    
}

console.log(array);