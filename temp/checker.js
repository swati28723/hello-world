/*
    Instructions:
        1. Write your code below the "WRITE YOUR LOGIC HERE" comment
        2. Take input from terminal (seperated by spaces) to receive the list 
           e.g.
           1 0 1 1 0
        3. Return the maximum number of consecutive ones in the list after replacing at max one 0 with 1
*/

// const { count } = require("console");

var findMaxConsecutiveOnes = function(nums) {
    //WRITE YOUR LOGIC HERE
  let  arr=[];
    let n = parseInt(prompt("Enter array length"));
    for(let i = 0; i<n; i++){
    let userInput = parseInt(prompt("enter an element"));
       arr.push(userInput);
    }
     i = 0;
     count = 0;
     let j = 1;
    while(i<n) {
        if (arr[i]===0);{
         arr.splice(arr[i] , 1);
          i = n;
        }
        i++;
    }
    i = 1 
  while(i<n) {
    if (arr[i]!==0){
        count++;
    }
    i++;
       }
       console.log(count);


 
    
    
 };

/*DO NOT CHANGE ANYTHING BELOW THIS LINE*/
// var readline = require('readline');
// var rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// rl.question("", function(s) {
//     var nums = s.split(" ").map(Number);
//     console.log(findMaxConsecutiveOnes(nums));
//     rl.close();
// });