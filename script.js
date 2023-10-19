// 1. Encapsulation
class BankAccount {
    constructor(accountNumber, accountHolder, balance) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = balance;
    }

    // Getter method for balance
    getBalance() {
        return this.balance;
    }

    // Setter method for balance
    setBalance(newBalance) {
        this.balance = newBalance;
    }

    // 4. Abstraction
    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            return amount;
        } else {
            console.log("Insufficient funds!");
            return 0;
        }
    }
}

// 2. Inheritance
class SavingsAccount extends BankAccount {
    constructor(accountNumber, accountHolder, balance, interestRate) {
        super(accountNumber, accountHolder, balance);
        this.interestRate = interestRate;
    }

    calculateInterest() {
        return this.balance * (this.interestRate / 100);
    }
}

// 3. Polymorphism
class CurrentAccount extends BankAccount {
    constructor(accountNumber, accountHolder, balance, overdraftLimit) {
        super(accountNumber, accountHolder, balance);
        this.overdraftLimit = overdraftLimit;
    }

    withdraw(amount) {
        if (amount <= this.balance + this.overdraftLimit) {
            this.balance -= amount;
            return amount;
        } else {
            console.log("Exceeded overdraft limit!");
            return 0;
        }
    }
}


let savingsAccount = new SavingsAccount("SA12345", "John Doe", 1000, 5);
let currentAccount = new CurrentAccount("CA67890", "Jane Doe", 2000, 1000);

savingsAccount.deposit(500);
currentAccount.withdraw(3000);

console.log(`Savings Account Balance: $${savingsAccount.getBalance()}`);
console.log(`Current Account Balance: $${currentAccount.getBalance()}`);











// Encapsulation: We encapsulate the account details (account number, account holder, and balance) within the BankAccount class. The methods getBalance and setBalance allow controlled access to the balance property.

// Inheritance: We create two specialized classes (SavingsAccount and CurrentAccount) that inherit from the BankAccount class. They inherit the properties and methods of the parent class and add their own specific features.

// Polymorphism: Both SavingsAccount and CurrentAccount classes override the withdraw method to provide their specific behavior while adhering to the same method signature.

// Abstraction: The deposit method abstracts the process of adding funds to an account. The user doesn't need to know the internal details of how the balance is updated.