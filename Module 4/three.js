// function addOrder(orderNumber, name, array, arrayI, arrayN) {
//     array.push(`Order ${orderNumber} added to the queue.`)
//     arrayI.push(orderNumber)
//     arrayN.push(name)
// }

// function orderTime(arrayI, orderNumber, array) {
//     if (orderNumber in arrayI)
//     {
//         let temp = arrayI.indexOf(orderNumber);
//         array.push(`Order ${orderNumber} will be ready in approximately ${(temp+1)*10} minutes.`)
//     }
// }

// function showOrder(array, arrayI, arrayN){
//     let len = arrayI.length;
//     if (len >= 1)
//     {
//         array.push(`Next order to be ready: ${arrayI[0]} (${arrayN[0]})`)
//         arrayI.pop(arrayI[0])
//         arrayN.pop(arrayN[0])
//     }
//     else
//     {
//         array.push("No orders in queue")
//     }
// }

// const input = require('readline-sync');

// let n = input.questionInt("Enter queries: ");

// let array = [];
// let arrayN = [];
// let arrayI = [];

// for (let i = 0; i<n; i++)
// {
//     let op = input.questionInt("Enter type: ");

//     if (op == 1)
//     {
//         let orderNumber = input.questionInt("Enter OrderNumber: ");
//         let name = input.question("Enter name: ");
//         addOrder(orderNumber, name, array, arrayI, arrayN);
//     }
//     if (op == 2)
//     {
//         let orderNumber = input.questionInt("Enter OrderNumber: ");
//         orderTime(arrayI, orderNumber, array);
//     }
//     if (op == 3)
//     {
//         showOrder(array, arrayI, arrayN);
//     }
// }

// for (let i = 0; i < array.length; i++)
// {
//     console.log(array[i]);
// }

function addOrder(orderNumber, name, array, arrayI, arrayN) {
    array.push(`Order ${orderNumber} added to the queue.`);
    arrayI.push(orderNumber);
    arrayN.push(name);
}

function orderTime(orderNumber, arrayI, array) {
    let temp = arrayI.indexOf(orderNumber);
    if (temp !== -1) {
        return (temp + 1) * 10;
    } else {
        return -1;
    }
}

function showOrder(array, arrayI, arrayN) {
    if (arrayI.length >= 1) {
        array.push(`Next order to be ready: ${arrayI[0]} (${arrayN[0]})`);
        arrayI.shift();
        arrayN.shift();
    } else {
        array.push("No orders in queue");
    }
}

const input = require('readline-sync');

let n = input.questionInt("Enter queries: ");

let array = [];
let arrayN = [];
let arrayI = [];

for (let i = 0; i < n; i++) {
    let op = input.questionInt("Enter type: ");

    if (op === 1) {
        let orderNumber = input.questionInt("Enter OrderNumber: ");
        let name = input.question("Enter name: ");
        addOrder(orderNumber, name, array, arrayI, arrayN);
    }
    if (op === 2) {
        let orderNumber = input.questionInt("Enter OrderNumber: ");
        let time = orderTime(orderNumber, arrayI, array);
        if (time !== -1) {
            array.push(`Order ${orderNumber} will be ready in approximately ${time} minutes.`);
            arrayI.shift();
            arrayN.shift();
        } else {
            array.push("Order not found");
        }
    }
    if (op === 3) {
        showOrder(array, arrayI, arrayN);
    }
}

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
