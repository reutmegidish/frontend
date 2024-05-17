// Utility function to validate amounts
const validateAmount = (amount) => {
	if (amount <= 0 || isNaN(amount)) {
		throw new Error('Amount must be a positive number.');
	}
};

// Utility function to check for sufficient funds
const hasSufficientFunds = (account, amount) => {
	return account.balance >= amount;
};

// Factory function for creating a generic account
const createAccount = (accountHolder, initialBalance, accountNumber) => {
	validateAmount(initialBalance);

	// An object with common account properties and methods
	return {
		accountHolder,
		accountNumber,
		balance: initialBalance,
		getBalance: function () {
			return this.balance;
		},
		getAccountHolder: function () {
			return this.accountHolder;
		},
		getAccountNumber: function () {
			return this.accountNumber;
		},
		deposit: function (amount) {
			validateAmount(amount);
			this.balance += amount;
			console.log(`${amount} deposited. New balance: ${this.balance}`);
		},
		withdraw: function (amount) {
			validateAmount(amount);
			if (hasSufficientFunds(this, amount)) {
				this.balance -= amount;
				console.log(`${amount} withdrawn. New balance: ${this.balance}`);
			} else {
				console.log('Insufficient funds.');
			}
		},
		hasSufficientFunds: function (amount) {
			return hasSufficientFunds(this, amount);
		},
	};
};

// Factory function for creating a savings account
const createSavingsAccount = (accountHolder, initialBalance, accountNumber, interestRate) => {
	// Creating a generic account and adding specific savings account features
	const account = createAccount(accountHolder, initialBalance, accountNumber);

	// Adding savings-specific properties and methods
	return {
		...account,
		interestRate,
		addInterest: function () {
			const interest = this.balance * (this.interestRate / 100);
			this.balance += interest;
			console.log(`Interest added. New balance: ${this.balance}`);
		},
		getInterestRate: function () {
			return this.interestRate;
		},
		setInterestRate: function (newRate) {
			this.interestRate = newRate;
			console.log(`Interest rate set to ${newRate}%`);
		},
	};
};

// Factory function for creating a checking account
const createCheckingAccount = (accountHolder, initialBalance, accountNumber, overdraftLimit) => {
	// Creating a generic account and adding specific checking account features
	const account = createAccount(accountHolder, initialBalance, accountNumber);

	// Adding checking-specific properties and methods
	return {
		...account,
		overdraftLimit,
		withdraw: function (amount) {
			validateAmount(amount);
			if (this.balance + this.overdraftLimit >= amount) {
				this.balance -= amount;
				console.log(`${amount} withdrawn. New balance: ${this.balance}`);
			} else {
				console.log('Exceeded overdraft limit.');
			}
		},
		getOverdraftLimit: function () {
			return this.overdraftLimit;
		},
		setOverdraftLimit: function (newLimit) {
			this.overdraftLimit = newLimit;
			console.log(`Overdraft limit set to ${newLimit}`);
		},
	};
};

// Testing the functionality

// Creating a savings account and performing operations
const savingsAccount = createSavingsAccount('John Doe', 1000, 12345, 2);
console.log(`Account Holder: ${savingsAccount.getAccountHolder()}`);
console.log(`Account Number: ${savingsAccount.getAccountNumber()}`);
console.log(`Initial Balance: ${savingsAccount.getBalance()}`);
console.log(`Interest Rate: ${savingsAccount.getInterestRate()}`);
savingsAccount.deposit(500);
savingsAccount.withdraw(200);
savingsAccount.addInterest();
savingsAccount.setInterestRate(3);
savingsAccount.addInterest();

// Creating a checking account and performing operations
const checkingAccount = createCheckingAccount('Jane Smith', 500, 67890, 300);
console.log(`\nAccount Holder: ${checkingAccount.getAccountHolder()}`);
console.log(`Account Number: ${checkingAccount.getAccountNumber()}`);
console.log(`Initial Balance: ${checkingAccount.getBalance()}`);
console.log(`Overdraft Limit: ${checkingAccount.getOverdraftLimit()}`);
checkingAccount.deposit(300);
checkingAccount.withdraw(700);
checkingAccount.withdraw(200);
checkingAccount.setOverdraftLimit(500);
checkingAccount.withdraw(400);
