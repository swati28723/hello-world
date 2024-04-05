// let url = "https://jsonplaceholder.typicode.com/todos/1"
// fetch(url).then((response) =>{
//     return response.json();
// })
// .then((jsondata) =>{
//     console.log(jsondata);
// })
// console.log("vinay");

import fetch from 'node-fetch';

let url = "https://jsonplaceholder.typicode.com/todos/1";
fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((jsondata) => {
        console.log(jsondata);
    });
console.log("vinay");
