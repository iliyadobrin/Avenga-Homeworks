// ========================================
// 📜 IronBank Legacy Banking System
// ========================================

const bankData = {
    "admin": { pin: "0000", balance: 1000000, history: [] },
    "user1": { pin: "1234", balance: 500, history: [] },
    "user2": { pin: "9999", balance: 10, history: [] }
};

let currentUser = null;

// ========================================
// 🔧 UTILITY FUNCTIONS
// ========================================

function getCurrentDateTime() {
    const now = new Date();
    return now.toLocaleString();
}

function formatCurrency(amount) {
    return "$" + amount.toFixed(2);
}

function isValidNumber(input) {
    if (input === null || input === "") {
        return false;
    }
    const num = parseFloat(input);
    if (isNaN(num)) {
        return false;
    }
    return true;
}

function parseAmount(input) {
    return parseFloat(input);
}

// ========================================
// 📜 RECURSIVE HISTORY DISPLAY
// ========================================

function buildHistoryString(historyArray, index, resultString) {
    if (index >= historyArray.length) {
        return resultString;
    }
    
    const newString = resultString + (index + 1) + ". " + historyArray[index] + "\n";
    return buildHistoryString(historyArray, index + 1, newString);
}

function displayHistory() {
    if (currentUser === null) {
        alert("Error: No user logged in.");
        return mainMenu();
    }
    
    const userHistory = bankData[currentUser].history;
    
    if (userHistory.length === 0) {
        alert("No transaction history available.");
    } else {
        const historyText = buildHistoryString(userHistory, 0, "📜 Transaction History:\n\n");
        alert(historyText);
    }
    
    return dashboard();
}

// ========================================
// 🔐 AUTHENTICATION SYSTEM
// ========================================

function login() {
    const username = prompt("Enter your Username:");
    
    if (username === null || username === "") {
        alert("Login cancelled.");
        return mainMenu();
    }
    
    if (bankData[username] === undefined) {
        alert("❌ User not found. Please try again.");
        return login();
    }
    
    return verifyPin(username);
}

function verifyPin(username) {
    const pin = prompt("Enter your PIN:");
    
    if (pin === null || pin === "") {
        alert("Login cancelled.");
        return mainMenu();
    }
    
    if (bankData[username].pin === pin) {
        currentUser = username;
        alert("✅ Welcome, " + username + "!");
        return dashboard();
    } else {
        alert("❌ Incorrect PIN. Please try again.");
        return verifyPin(username);
    }
}

function logout() {
    const confirmLogout = confirm("Are you sure you want to logout?");
    
    if (confirmLogout) {
        alert("Goodbye, " + currentUser + "!");
        currentUser = null;
        return mainMenu();
    } else {
        return dashboard();
    }
}

// ========================================
// 💰 BALANCE CHECK
// ========================================

function checkBalance() {
    if (currentUser === null) {
        alert("Error: No user logged in.");
        return mainMenu();
    }
    
    const balance = bankData[currentUser].balance;
    alert("💰 Your Current Balance: " + formatCurrency(balance));
    return dashboard();
}

// ========================================
// 💵 DEPOSIT FUNDS
// ========================================

function depositFunds() {
    if (currentUser === null) {
        alert("Error: No user logged in.");
        return mainMenu();
    }
    
    const input = prompt("Enter amount to deposit:");
    
    if (input === null || input === "") {
        alert("Deposit cancelled.");
        return dashboard();
    }
    
    if (!isValidNumber(input)) {
        alert("❌ Invalid amount. Please enter a valid number.");
        return depositFunds();
    }
    
    const amount = parseAmount(input);
    
    if (amount <= 0) {
        alert("❌ Amount must be greater than zero.");
        return depositFunds();
    }
    
    return confirmDeposit(amount);
}

function confirmDeposit(amount) {
    const confirmAction = confirm("Deposit " + formatCurrency(amount) + "?");
    
    if (confirmAction) {
        bankData[currentUser].balance = bankData[currentUser].balance + amount;
        const timestamp = getCurrentDateTime();
        const logEntry = "Deposited " + formatCurrency(amount) + " at " + timestamp;
        bankData[currentUser].history[bankData[currentUser].history.length] = logEntry;
        
        alert("✅ Deposit successful! New balance: " + formatCurrency(bankData[currentUser].balance));
    } else {
        alert("Deposit cancelled.");
    }
    
    return dashboard();
}

// ========================================
// 💸 WITHDRAW FUNDS
// ========================================

function withdrawFunds() {
    if (currentUser === null) {
        alert("Error: No user logged in.");
        return mainMenu();
    }
    
    const input = prompt("Enter amount to withdraw:\nCurrent Balance: " + formatCurrency(bankData[currentUser].balance));
    
    if (input === null || input === "") {
        alert("Withdrawal cancelled.");
        return dashboard();
    }
    
    if (!isValidNumber(input)) {
        alert("❌ Invalid amount. Please enter a valid number.");
        return withdrawFunds();
    }
    
    const amount = parseAmount(input);
    
    if (amount <= 0) {
        alert("❌ Amount must be greater than zero.");
        return withdrawFunds();
    }
    
    if (amount > bankData[currentUser].balance) {
        alert("❌ Insufficient funds. Your balance is " + formatCurrency(bankData[currentUser].balance));
        return withdrawFunds();
    }
    
    return confirmWithdraw(amount);
}

function confirmWithdraw(amount) {
    const confirmAction = confirm("Withdraw " + formatCurrency(amount) + "?");
    
    if (confirmAction) {
        bankData[currentUser].balance = bankData[currentUser].balance - amount;
        const timestamp = getCurrentDateTime();
        const logEntry = "Withdrew " + formatCurrency(amount) + " at " + timestamp;
        bankData[currentUser].history[bankData[currentUser].history.length] = logEntry;
        
        alert("✅ Withdrawal successful! New balance: " + formatCurrency(bankData[currentUser].balance));
    } else {
        alert("Withdrawal cancelled.");
    }
    
    return dashboard();
}

// ========================================
// 💱 TRANSFER MONEY
// ========================================

function transferMoney() {
    if (currentUser === null) {
        alert("Error: No user logged in.");
        return mainMenu();
    }
    
    const recipient = prompt("Enter recipient username:");
    
    if (recipient === null || recipient === "") {
        alert("Transfer cancelled.");
        return dashboard();
    }
    
    if (bankData[recipient] === undefined) {
        alert("❌ Recipient not found. Please try again.");
        return transferMoney();
    }
    
    if (recipient === currentUser) {
        alert("❌ You cannot transfer money to yourself.");
        return transferMoney();
    }
    
    return transferAmount(recipient);
}

function transferAmount(recipient) {
    const input = prompt("Enter amount to transfer to " + recipient + ":\nYour Balance: " + formatCurrency(bankData[currentUser].balance));
    
    if (input === null || input === "") {
        alert("Transfer cancelled.");
        return dashboard();
    }
    
    if (!isValidNumber(input)) {
        alert("❌ Invalid amount. Please enter a valid number.");
        return transferAmount(recipient);
    }
    
    const amount = parseAmount(input);
    
    if (amount <= 0) {
        alert("❌ Amount must be greater than zero.");
        return transferAmount(recipient);
    }
    
    if (amount > bankData[currentUser].balance) {
        alert("❌ Insufficient funds. Your balance is " + formatCurrency(bankData[currentUser].balance));
        return transferAmount(recipient);
    }
    
    return confirmTransfer(recipient, amount);
}

function confirmTransfer(recipient, amount) {
    const confirmAction = confirm("Transfer " + formatCurrency(amount) + " to " + recipient + "?");
    
    if (confirmAction) {
        bankData[currentUser].balance = bankData[currentUser].balance - amount;
        bankData[recipient].balance = bankData[recipient].balance + amount;
        
        const timestamp = getCurrentDateTime();
        const senderLog = "Sent " + formatCurrency(amount) + " to " + recipient + " at " + timestamp;
        const recipientLog = "Received " + formatCurrency(amount) + " from " + currentUser + " at " + timestamp;
        
        bankData[currentUser].history[bankData[currentUser].history.length] = senderLog;
        bankData[recipient].history[bankData[recipient].history.length] = recipientLog;
        
        alert("✅ Transfer successful! New balance: " + formatCurrency(bankData[currentUser].balance));
    } else {
        alert("Transfer cancelled.");
    }
    
    return dashboard();
}

// ========================================
// 🔑 CHANGE PIN
// ========================================

function changePIN() {
    if (currentUser === null) {
        alert("Error: No user logged in.");
        return mainMenu();
    }
    
    const currentPIN = prompt("Enter your current PIN:");
    
    if (currentPIN === null || currentPIN === "") {
        alert("PIN change cancelled.");
        return dashboard();
    }
    
    if (bankData[currentUser].pin !== currentPIN) {
        alert("❌ Incorrect current PIN.");
        return changePIN();
    }
    
    return setNewPIN();
}

function setNewPIN() {
    const newPIN = prompt("Enter your new PIN:");
    
    if (newPIN === null || newPIN === "") {
        alert("PIN change cancelled.");
        return dashboard();
    }
    
    if (newPIN.length < 4) {
        alert("❌ PIN must be at least 4 characters long.");
        return setNewPIN();
    }
    
    return confirmNewPIN(newPIN);
}

function confirmNewPIN(newPIN) {
    const confirmPIN = prompt("Confirm your new PIN:");
    
    if (confirmPIN === null || confirmPIN === "") {
        alert("PIN change cancelled.");
        return dashboard();
    }
    
    if (confirmPIN !== newPIN) {
        alert("❌ PINs do not match. Please try again.");
        return setNewPIN();
    }
    
    bankData[currentUser].pin = newPIN;
    alert("✅ PIN successfully changed!");
    return dashboard();
}

// ========================================
// 🖥️ DASHBOARD (MAIN MENU)
// ========================================

function dashboard() {
    if (currentUser === null) {
        alert("Error: No user logged in.");
        return mainMenu();
    }
    
    const menuText = "🏦 IronBank Dashboard\n" +
                     "User: " + currentUser + "\n" +
                     "Balance: " + formatCurrency(bankData[currentUser].balance) + "\n\n" +
                     "1. Check Balance\n" +
                     "2. Deposit Funds\n" +
                     "3. Withdraw Funds\n" +
                     "4. Transfer Money\n" +
                     "5. View Transaction History\n" +
                     "6. Change PIN\n" +
                     "7. Logout\n\n" +
                     "Enter your choice (1-7):";
    
    const choice = prompt(menuText);
    
    if (choice === null || choice === "") {
        return dashboard();
    }
    
    if (choice === "1") {
        return checkBalance();
    } else if (choice === "2") {
        return depositFunds();
    } else if (choice === "3") {
        return withdrawFunds();
    } else if (choice === "4") {
        return transferMoney();
    } else if (choice === "5") {
        return displayHistory();
    } else if (choice === "6") {
        return changePIN();
    } else if (choice === "7") {
        return logout();
    } else {
        alert("❌ Invalid choice. Please enter a number between 1 and 7.");
        return dashboard();
    }
}

// ========================================
// 🚀 MAIN MENU (ENTRY POINT)
// ========================================

function mainMenu() {
    const menuText = "🏦 Welcome to IronBank\n\n" +
                     "1. Login\n" +
                     "2. Exit\n\n" +
                     "Enter your choice (1-2):";
    
    const choice = prompt(menuText);
    
    if (choice === null || choice === "2") {
        alert("Thank you for using IronBank. Goodbye!");
        return;
    }
    
    if (choice === "1") {
        return login();
    } else {
        alert("❌ Invalid choice. Please enter 1 or 2.");
        return mainMenu();
    }
}

// ========================================
// 🎬 START THE APPLICATION
// ========================================

mainMenu();