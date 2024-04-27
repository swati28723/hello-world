const input = require('readline-sync');

let s = input.question("Enter a string: ");
let l = s.length;
let m = 'map';
let p = 'pie';

const regex = new RegExp(m, 'g');
const matches = s.match(regex);
let temp =  matches ? matches.length : 0;

const rege = new RegExp(p, 'g');
const matche = s.match(rege);
let temp1 =  matche ? matche.length : 0;

console.log(temp + temp1);