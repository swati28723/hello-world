function addBloodDonation(donor, bloodType, date, array, bloodBank) {
    array.push({donor, bloodType, date});
    console.log("Added a blood donation entry:", array);
    bloodBank.push(bloodType);
}


function removeBloodDonation(donor, array, bloodBank) {
    const removedEntryIndex = array.findIndex(entry => entry.donor === donor);
    if (removedEntryIndex !== -1) 
    {
        const removedEntry = array.splice(removedEntryIndex, 1)[0];
        console.log(`Removed blood donation entry for ${donor}:-`, array);
        
        const bloodTypeIndex = bloodBank.indexOf(removedEntry.bloodType);
        if (bloodTypeIndex !== -1) 
        {
            bloodBank.splice(bloodTypeIndex, 1);
        }
        console.log(`Blood Bank after removing donor ${donor}:`, bloodBank);
    } 
    else 
    {
        console.log(`Donor ${donor} not found.`);
    }
}


function checkAvailability(bloodType, bloodBank) {
    if (bloodBank.includes(bloodType)) 
    {
        console.log("Available");
    } 
    else 
    {
        console.log("Not Available");
    }
}


const input = require("readline-sync");


let array = [];

let bloodBank = []; 

let entries = input.questionInt("Enter No. of entries: ");

for (let i = 0; i<entries; i++)
{
    let op = input.questionInt("Enter op: ");

    if (op == 0) 
    {
        let donor = input.question("Enter donor name: ");
        let bloodType = input.question("Enter blood type: ");
        let date = input.question("Enter date (YYYY-MM-DD): ");
        addBloodDonation(donor, bloodType, date, array, bloodBank);
    } 
    else if (op == 1) 
    {
        let donor = input.question("Enter donor name: ");
        removeBloodDonation(donor, array, bloodBank);
    } 
    else if (op == 2) 
    {
        let bloodType = input.question("Enter blood type: ");
        checkAvailability(bloodType, bloodBank); 
    } 
    else 
    {
        console.log("Invalid operation.");
    }
}




