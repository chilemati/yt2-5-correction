//JavaScript Fundamentals Assignment

// Bank ATM Database Object
const bankDatabase = {
  1001123456: {
    accountNumber: 1001123456,
    accountName: "Mathy Amadi",
    accountBalance: 100000,
    accountPin: 1234,
    accountType: "Savings",
    bank: "UBA",
  },
  1001234567: {
    accountNumber: 1001234567,
    accountName: "Happiness Ebibote",
    accountBalance: 200000,
    accountPin: 2345,
    accountType: "Current",
    bank: "GTB",
  },
  1001345678: {
    accountNumber: 1001345678,
    accountName: "Daniel Zadva Jnr",
    accountBalance: 500000,
    accountPin: 3456,
    accountType: "Savings",
    bank: "Access",
  },
  1001456789: {
    accountNumber: 1001456789,
    accountName: "Chidinma C. Ugonna",
    accountBalance: 400000,
    accountPin: 4567,
    accountType: "Current",
    bank: "First Bank",
  },
  1001567890: {
    accountNumber: 1001567890,
    accountName: "Shallom Wosu",
    accountBalance: 500000,
    accountPin: 5678,
    accountType: "Savings",
    bank: "Access",
  },
};

let cardNumber = prompt(
  "Please Insert your Card by Typing the last 10 digits of your Card Number"
);
if (bankDatabase[cardNumber] == undefined) {
  alert("Invalid Card Number!\n Please reload the page to try again");
} else if (bankDatabase[cardNumber] == null) {
  alert(
    "TRANSACTION CANCELLED!\n Thank you for Using our ATM! Goodbye\n Would you like to carry out another transaction? Reload the page to start again"
  );
} else {
  let cardPin = prompt("Please Enter Your Pin");
  if (bankDatabase[cardNumber].accountPin == cardPin) {
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
  } else if (cardPin == null) {
    alert(
      "TRANSACTION CANCELLED!\nThank you for Using our ATM! Goodbye\n Would you like to carry out another transaction? Reload the page to start again"
    );
  } else {
    // if the pinEntered is incorrect, display an error message
    alert("Invalid Pin!\n Please reload the page to try again");
  }
}

// Function to check account balance
function checkBalance(cardNumber) {
  let confirmPin = prompt("Please Confirm Your Pin");
  if (bankDatabase[cardNumber].accountPin == confirmPin) {
    // if the user confirms the pin, display the accountBalance of the user
    alert(`Your Account Balance: ${bankDatabase[cardNumber].accountBalance}`);
  } else if (confirmPin == null) {
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
  if (bankDatabase[cardNumber].accountPin == confirmPin) {
    // if the user confirms the pin, prompt user to enter withdrawAmount and store the response in a variable called withdrawAmount
    let withdrawAmount = prompt("Enter Withdrawal Amount");
    if (bankDatabase[cardNumber].accountBalance >= withdrawAmount) {
      // if the accountBalance is greater than or equal to the withdrawAmount, deduct the withdrawAmount from the accountBalance
      bankDatabase[cardNumber].accountBalance =
        parseInt(bankDatabase[cardNumber].accountBalance) -
        parseInt(withdrawAmount);

      // display a success message
      alert(
        `Withdrawal Successful!\n Your New Account Balance: ${bankDatabase[cardNumber].accountBalance}`
      );
    } else {
      // if the accountBalance is less than the withdrawAmount, display an error message
      alert("Insufficient Balance!\n Please reload the page to try again");
    }
  } else if (confirmPin == null) {
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
  if (bankDatabase[cardNumber].accountPin == confirmPin) {
    // if the user confirms the pin, prompt user to enter depositAmount and store the response in a variable called depositAmount
    let depositAmount = prompt("Enter Deposit Amount");
    bankDatabase[cardNumber].accountBalance =
      parseInt(bankDatabase[cardNumber].accountBalance) +
      parseInt(depositAmount);

    // display a success message
    alert(
      `Deposit Successful!\n Your New Account Balance: ${bankDatabase[cardNumber].accountBalance}`
    );
  } else if (confirmPin == null) {
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
  // prompt user to enter receiverAccount and store the response in a variable called receiverAccount
  let receiverAccount = prompt("Enter Receiver's Account Number:");
  let receiverBank = prompt(
    "Please Select Receiver's Bank Name:\n 1. UBA\n 2. GTB\n 3. Access\n 4. First Bank"
  );
  switch (receiverBank) {
    case "1":
      receiverBank = "UBA";
      break;
    case "2":
      receiverBank = "GTB";
      break;
    case "3":
      receiverBank = "Access";
      break;
    case "4":
      receiverBank = "First Bank";
      break;
    default:
      alert("Invalid Bank Name!\n Please reload the page to try again");
      break;
  }

  //check if the receiver's information is in the bankDatabase
  if (validateReceiverDetails(receiverAccount, receiverBank)) {
    let confirmDetails = confirm(
      `Please confirm Receiver's Details:\n Account Name: ${bankDatabase[receiverAccount].accountName}\n Account Number: ${bankDatabase[receiverAccount].accountNumber}\n Bank Name: ${bankDatabase[receiverAccount].bank}`
    );

    if (confirmDetails) {
      // prompt user to enter transferAmount and store the response in a variable called transferAmount
      let transferAmount = prompt("Enter Transfer Amount");
      //check if the transferAmount is less than the accountBalance
      if (bankDatabase[cardNumber].accountBalance < transferAmount) {
        // if the accountBalance is less than the transferAmount, display an error message
        alert("Insufficient Balance!\n Please reload the page to try again");
      } else {
        //Confirm transfer and pin
        let confirmTransfer = confirm(
          `You are about to transfer ${transferAmount} to ${bankDatabase[receiverAccount].accountName} with Account number: ${bankDatabase[receiverAccount].accountNumber}, Bank: ${bankDatabase[receiverAccount].bank}\n Please Confirm`
        );
        // if the user confirms the transfer, deduct the transferAmount from the accountBalance
        if (confirmTransfer) {
          let authorizedPin = prompt("Please Authorize Transfer with Pin");
          if (bankDatabase[cardNumber].accountPin == authorizedPin) {
            // if transferAccountNumber is in the bankDatabase, deduct the transferAmount from the user's accountBalance
            let balance =
              parseInt(bankDatabase[cardNumber].accountBalance) -
              parseInt(transferAmount);

            // add the transferAmount to the receiverAccount's accountBalance
            let newBalance =
              parseInt(bankDatabase[receiverAccount].accountBalance) +
              parseInt(transferAmount);

            // display a success message
            alert(
              `You've Transfered ${transferAmount} Successfully to ${bankDatabase[receiverAccount].accountName}!\n Your Previous Account Balance Was: ${bankDatabase[cardNumber].accountBalance}\n Your New Account Balance: ${balance}\n\n Receiver's Previous Account Balance Was: ${bankDatabase[receiverAccount].accountBalance}\n Receiver's New Account Balance: ${newBalance}`
            );
          } else if (authorizedPin == null) {
            alert(
              "Transaction cancelled!!!\n Would you like to carry out another transaction? Reload the page to start again"
            );
          } else if (authorizedPin == undefined) {
            alert(
              "Invalid Pin Entered!!!\n Would you like to carry out another transaction? Reload the page to start again"
            );
          } else {
            // if the pinEntered is incorrect, display an error message
            alert("Invalid Pin!\n Please reload the page to try again");
          }
        } else {
          alert("Transfer Cancelled!\n Please reload the page to try again");
        }
      }
    }
  } else {
    // if the transferAccountNumber is incorrect, display an error message
    alert("Invalid Account Number!\n Please reload the page to try again");
  }
}
//end of transfer function

// Function to validate receiver details
function validateReceiverDetails(receiverAccount, receiverBank) {
  // Convert the receiverAccount to a string, as the keys in the database object are strings.
  const accountKey = receiverAccount.toString();

  // Check if the account exists in the bankDatabase
  if (bankDatabase.hasOwnProperty(accountKey)) {
    // Get the account details from the database
    const accountDetails = bankDatabase[accountKey];

    // Check if the bank matches the one provided by the customer
    if (accountDetails.bank === receiverBank) {
      // The account and bank match
      return true;
    } else {
      // The bank does not match
      alert("The bank name entered does not match the account's bank.");
      return false;
    }
  } else {
    // The account does not exist
    alert("The account number entered does not exist.");
    return false;
  }
}
