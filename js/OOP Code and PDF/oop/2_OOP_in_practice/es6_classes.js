// Base class representing a generic bank account
class BankAccount {
	static accountCounter = 1000; // Static property to keep track of account numbers

	// Private properties to store account details
	#accountNumber;
	#accountHolder;
	#balance;

	constructor(accountHolder, initialBalance = 0) {
		this.#accountNumber = BankAccount.generateAccountNumber();
		this.#accountHolder = accountHolder;
		this.#balance = initialBalance;
	}

	// Static method to generate unique account numbers
	static generateAccountNumber() {
		return BankAccount.accountCounter++;
	}

	// Protected method to validate transaction amounts
	_validateAmount(amount) {
		if (typeof amount !== 'number' || amount <= 0) {
			throw new Error('Invalid amount');
		}
	}

	// Protected method to check if there are sufficient funds (can be overridden by subclasses)
	_hasSufficientFunds(amount) {
		return amount <= this.#balance;
	}

	// Public method to deposit money into the account
	deposit(amount) {
		this._validateAmount(amount);
		this.#balance += amount;
	}

	// Public method to withdraw money from the account
	withdraw(amount) {
		this._validateAmount(amount);
		if (!this._hasSufficientFunds(amount)) {
			throw new Error('Insufficient funds');
		}
		this.#balance -= amount;
	}

	// Getter for the current balance of the account
	get balance() {
		return this.#balance;
	}

	// Getter for account holder name
	get accountHolder() {
		return this.#accountHolder;
	}

	// Getter for account number
	get accountNumber() {
		return this.#accountNumber;
	}
}

// Subclass representing a savings account
class SavingsAccount extends BankAccount {
	#interestRate; // Private property to store interest rate

	constructor(accountHolder, initialBalance, interestRate) {
		super(accountHolder, initialBalance); // Call the constructor of the parent class
		this.#interestRate = interestRate;
	}

	// Public method to add interest to the account balance
	addInterest() {
		const interest = this.getBalance() * (this.#interestRate / 100);
		this.deposit(interest);
	}

	// Getter for interest rate
	get interestRate() {
		return this.#interestRate;
	}

	// Setter for interest rate with validation
	set interestRate(rate) {
		if (rate < 0) {
			throw new Error('Interest rate cannot be negative');
		}
		this.#interestRate = rate;
	}
}

// Subclass representing a checking account
class CheckingAccount extends BankAccount {
	#overdraftLimit; // Private property to store overdraft limit

	constructor(accountHolder, initialBalance, overdraftLimit) {
		super(accountHolder, initialBalance); // Call the constructor of the parent class
		this.#overdraftLimit = overdraftLimit;
	}

	// Overridden method to check if there are sufficient funds including overdraft
	_hasSufficientFunds(amount) {
		return amount <= this.getBalance() + this.#overdraftLimit;
	}

	// Getter for overdraft limit
	get overdraftLimit() {
		return this.#overdraftLimit;
	}

	// Setter for overdraft limit with validation
	set overdraftLimit(limit) {
		if (limit < 0) {
			throw new Error('Overdraft limit cannot be negative');
		}
		this.#overdraftLimit = limit;
	}
}

// Example Usage:
try {
	const savingsAccount = new SavingsAccount('John Doe', 1000, 5);
	savingsAccount.addInterest();
	console.log(`Savings Account Balance: ${savingsAccount.getBalance()}`);

	const checkingAccount = new CheckingAccount('Jane Doe', 500, 200);

	checkingAccount.withdraw(600); // Should work due to overdraft
	console.log(`Checking Account Balance: ${checkingAccount.getBalance()}`);
} catch (error) {
	console.error(error.message);
}
