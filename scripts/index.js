//JavaScript Fundamentals Assignment

// Bank ATM Database Object
const bankDatabase = {  
    123456: {
        accountNumber: 123456,
        accountName: "John Doe",
        accountBalance: 100000,
        accountPin: 1234,
        accountType: "Savings"
    },
    234567: {
        accountNumber: 234567,
        accountName: "Jane Doe",
        accountBalance: 200000,
        accountPin: 2345,
        accountType: "Current"
    },
    345678: {
        accountNumber: 345678,
        accountName: "James Doe",
        accountBalance: 300000,
        accountPin: 3456,
        accountType: "Savings"
    },
    456789: {
        accountNumber: 456789,
        accountName: "Janet Doe",
        accountBalance: 400000,
        accountPin: 4567,
        accountType: "Current"
    }
};

// prompt user to insert card and store the response in a variable called cardInserted
let cardInserted = prompt("Welcome to Amadi Bank\n Please Insert Your Card\n Please Note: This is a prompt ATM\n Enter last 6 digits of your card number");

// check if the cardInserted is in the bankDatabase
if (bankDatabase[cardInserted] === undefined) {
    // if cardInserted is not in the bankDatabase, display an error message
    alert("Invalid Card Number");
} else {
    // if cardInserted is in the bankDatabase, prompt user to enter pin and store the response in a variable called pinEntered
    let pinEntered = prompt(`Welcome ${bankDatabase[cardInserted].accountName}!\n Please Enter Your Pin`);

    // check if the pinEntered is correct
    if (bankDatabase[cardInserted].accountPin == pinEntered) {
        // if the pinEntered is correct, display the accountName, accountType and accountBalance
        alert(`Welcome ${bankDatabase[cardInserted].accountName}\n Account Type: ${bankDatabase[cardInserted].accountType}\n Account Balance: ${bankDatabase[cardInserted].accountBalance}`);
    } else {
        // if the pinEntered is incorrect, display an error message
        alert("Invalid Pin");
    }
}
