//JavaScript Fundamentals Assignment

// Bank ATM Database Object
const bankDatabase = JSON.parse(localStorage.getItem("bankDatabase")) || {
  123456: {
    accountNumber: 123456,
    accountName: "John Doe",
    accountBalance: 100000,
    accountPin: 1234,
    accountType: "Savings",
  },
  234567: {
    accountNumber: 234567,
    accountName: "Jane Doe",
    accountBalance: 200000,
    accountPin: 2345,
    accountType: "Current",
  },
  345678: {
    accountNumber: 345678,
    accountName: "James Doe",
    accountBalance: 300000,
    accountPin: 3456,
    accountType: "Savings",
  },
  456789: {
    accountNumber: 456789,
    accountName: "Janet Doe",
    accountBalance: 400000,
    accountPin: 4567,
    accountType: "Current",
  },
};

// store the bankDatabase in the localStorage
function saveBankDatabase() {
  localStorage.setItem("bankDatabase", JSON.stringify(bankDatabase));
}
// prompt user to select an option and store the response in a variable called options
let options = prompt(
  "Welcome to Amadi Bank\n 1. New Customer\n 2. Existing Customer\n 3. Exit"
);
if (options === "1") {
  createNewAccount();
} else if (options === "2") {
  // prompt user to insert card and store the response in a variable called cardInserted
  let cardNumber = prompt(
    "Please Enter last 6 digits of your Card:\n Please Note: This is a prompt ATM"
  );
  // check if the cardInserted is in the bankDatabase
  if (bankDatabase[cardNumber] === undefined) {
    // if cardInserted is not in the bankDatabase, display an error message
    alert("Invalid Card Number\n Please reload the page to try again");
  } else if (bankDatabase[cardNumber] === null) {
    alert(
      "Thank you for Using our ATM! Goodbye\n Would you like to carry out another transaction? Reload the page to start again"
    );
  } else {
    // if cardInserted is in the bankDatabase, prompt user to enter pin and store the response in a variable called pinEntered
    let pinEntered = prompt(
      `Welcome ${bankDatabase[cardNumber].accountName}!\n Please Enter Your Pin`
    );

    // check if the pinEntered is correct
    if (bankDatabase[cardNumber].accountPin == pinEntered) {
      // if the pinEntered is correct, prompt user to select an option and store the response in a variable called transaction
      let transaction = prompt(
        `Welcome ${bankDatabase[cardNumber].accountName}!\n Please Select Transaction\n 1. Check Balance\n 2. Withdraw\n 3. Deposit\n 4. Transfer\n 5. Exit`
      );
      switch (transaction) {
        case "1":
          checkBalance(cardNumber);
          break;
        case "2":
          withdraw(cardNumber);
          break;
        case "3":
          deposit(cardNumber);
          break;
        case "4":
          transfer(cardNumber);
          break;
        case "5":
          alert(
            "Thank you for Using our ATM! Goodbye\n Please reload the page to start again"
          );
          break;
        case null:
          alert(
            "Thank you for Using our ATM! Goodbye\n Would you like to carry out another transaction? Reload the page to start again"
          );
          break;
        default:
          // if the user selects an invalid option, display an error message
          alert("Invalid Option!\n Please reload the page to try again");
          break;
      }
    } else if (pinEntered === null) {
      alert(
        "Thank you for Using our ATM! Goodbye\n Would you like to carry out another transaction? Reload the page to start again"
      );
    } else {
      // if the pinEntered is incorrect, display an error message
      alert("Invalid Pin!\n Please reload the page to try again");
    }
  }
} else if (options === "3") {
  // if the user selects 3, display a goodbye message
  alert("Thank you for Using our ATM! Goodbye");
} else if (options === null) {
  alert(
    "Thank you for Using our ATM! Goodbye\n Would you like to carry out another transaction? Reload the page to start again"
  );
} else {
  // if the user selects an invalid option, display an error message
  alert("Invalid Option!\n Please reload the page to try again");
}

// Function to create a new account
function createNewAccount() {
  // prompt user to enter accountName and store the response in a variable called accountName
  let accountName = prompt("Enter Account Name");

  // prompt user to enter accountType and store the response in a variable called accountType
  let accountType = prompt("Enter Account Type");

  // prompt user to enter accountBalance and store the response in a variable called accountBalance
  let accountBalance = prompt("Enter Deposit Amount");

  // prompt user to enter accountPin and store the response in a variable called accountPin
  let accountPin = prompt("Enter Account Pin");
  //   let confirmPin = confirm("Confirm Pin");

  // create a new accountNumber by adding 1 to the last accountNumber in the bankDatabase
  let accountNumbers = Object.keys(bankDatabase).map(Number);
  let newAccountNumber = Math.max(...accountNumbers) + 1;

  // add the new account to the bankDatabase
  bankDatabase[newAccountNumber] = {
    accountNumber: newAccountNumber,
    accountName: accountName,
    accountBalance: accountBalance,
    accountPin: accountPin,
    accountType: accountType,
  };

  // store the bankDatabase in the localStorage
  saveBankDatabase();

  // display the accountNumber, accountName, accountType and accountBalance of the new account
  alert(
    `Account Created Successfully\n Account Number: ${newAccountNumber}\n Account Name: ${accountName}\n Account Type: ${accountType}\n Account Balance: ${accountBalance} \nPease Note Account Number is your ATM Card Number`
  );
}
//end of createNewAccount function

// Function to check account balance
function checkBalance(cardNumber) {
  let confirmPin = prompt("Please Confirm Your Pin");
  if (bankDatabase[cardNumber].accountPin === confirmPin) {
    // if the user confirms the pin, display the accountBalance of the user
    alert(`Your Account Balance: ${bankDatabase[cardNumber].accountBalance}`);
  } else if (confirmPin === null) {
    alert(
      "Thank you for Using our ATM! Goodbye\n Would you like to carry out another transaction? Reload the page to start again"
    );
  } else {
    // if the pinEntered is incorrect, display an error message
    alert("Invalid Pin!\n Please reload the page to try again");
  }
}
//end of checkBalance function

// function to withdraw money
function withdraw(cardNumber) {
  let confirmPin = prompt("Please Confirm Your Pin");
  if (bankDatabase[cardNumber].accountPin === confirmPin) {
    // if the user confirms the pin, prompt user to enter withdrawAmount and store the response in a variable called withdrawAmount
    let withdrawAmount = prompt("Enter Withdrawal Amount");
    if (bankDatabase[cardNumber].accountBalance >= withdrawAmount) {
      // if the accountBalance is greater than or equal to the withdrawAmount, deduct the withdrawAmount from the accountBalance
      bankDatabase[cardNumber].accountBalance =
        parseInt(bankDatabase[cardNumber].accountBalance) -
        parseInt(withdrawAmount);
      // store the bankDatabase in the localStorage
      saveBankDatabase();
      // display a success message
      alert(
        `Withdrawal Successful!\n Your New Account Balance: ${bankDatabase[cardNumber].accountBalance}`
      );
    } else {
      // if the accountBalance is less than the withdrawAmount, display an error message
      alert("Insufficient Balance!\n Please reload the page to try again");
    }
  } else if (confirmPin === null) {
    alert(
      "Thank you for Using our ATM! Goodbye\n Would you like to carry out another transaction? Reload the page to start again"
    );
  } else {
    // if the pinEntered is incorrect, display an error message
    alert("Invalid Pin!\n Please reload the page to try again");
  }
}
//end of withdraw function

// Function to deposit money
function deposit(cardNumber) {
  let confirmPin = prompt("Please Confirm Your Pin");
  if (bankDatabase[cardNumber].accountPin === confirmPin) {
    // if the user confirms the pin, prompt user to enter depositAmount and store the response in a variable called depositAmount
    let depositAmount = prompt("Enter Deposit Amount");
    bankDatabase[cardNumber].accountBalance =
      parseInt(bankDatabase[cardNumber].accountBalance) +
      parseInt(depositAmount);
    // store the bankDatabase in the localStorage
    saveBankDatabase();
    // display a success message
    alert(
      `Deposit Successful!\n Your New Account Balance: ${bankDatabase[cardNumber].accountBalance}`
    );
  } else if (confirmPin === null) {
    alert(
      "Thank you for Using our ATM! Goodbye\n Would you like to carry out another transaction? Reload the page to start again"
    );
  } else {
    // if the pinEntered is incorrect, display an error message
    alert("Invalid Pin!\n Please reload the page to try again");
  }
}
//end of deposit function

// Function to transfer money
function transfer(cardNumber) {
  let confirmPin = prompt("Please Confirm Your Pin");
  if (bankDatabase[cardNumber].accountPin === confirmPin) {
    // prompt user to enter transferAmount and store the response in a variable called transferAmount
    let transferAmount = prompt("Enter Transfer Amount");

    // prompt user to enter transferAccountNumber and store the response in a variable called transferAccountNumber
    let transferAccountNumber = prompt("Enter Account Number to Transfer to");

    // check if the transferAccountNumber is in the bankDatabase
    if (bankDatabase[transferAccountNumber] === undefined) {
      // if transferAccountNumber is not in the bankDatabase, display an error message
      alert("Invalid Account Number!\n Please reload the page to try again");
    } else if (bankDatabase[transferAccountNumber] === null) {
      alert(
        "Thank you for Using our ATM! Goodbye\n Would you like to carry out another transaction? Reload the page to start again"
      );
    } else {
      // if transferAccountNumber is in the bankDatabase, deduct the transferAmount from the user's accountBalance
      bankDatabase[cardNumber].accountBalance =
        parseInt(bankDatabase[cardNumber].accountBalance) -
        parseInt(transferAmount);

      // add the transferAmount to the transferAccountNumber's accountBalance
      bankDatabase[transferAccountNumber].accountBalance =
        parseInt(bankDatabase[transferAccountNumber].accountBalance) +
        parseInt(transferAmount);

      // store the bankDatabase in the localStorage
      saveBankDatabase();

      // display a success message
      alert(
        `Transfer Successful!\n Your New Account Balance: ${bankDatabase[cardNumber].accountBalance}`
      );
    }
  } else if (confirmPin === null) {
    alert(
      "Thank you for Using our ATM! Goodbye\n Would you like to carry out another transaction? Reload the page to start again"
    );
  } else {
    // if the pinEntered is incorrect, display an error message
    alert("Invalid Pin!\n Please reload the page to try again");
  }
}
//end of transfer function
