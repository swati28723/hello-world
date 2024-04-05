// Explicit or type conversion

// 1. string conversion. converts value into string
// String() method
let a = 121.357;
let b = String(a);
let c = String(121);

// toString() method
let d = a.toString();
let e = (121).toString();

// toExponential() method
let f = a.toExponential; //parameter is optional

// toFixed method
let g = a.toFixed(2); //parameter is optional. It will give number after point as we give parameter

//toPrecision()
let h = a.toPrecision(4);//it directly remove the number and keep only whatever mentioned
// ************************************************************


// 2. Number conversion. It will converts value into numbers
let i = "121";
let j =  Number(a);

// parseInt(String, Radix)
// parseFloat()

// *********************************************

// 3. Boolean conversion. converts value in boolean
// syntax:- Boolean(valuesToBoolean)

let k = Boolean(a);




