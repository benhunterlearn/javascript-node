class BankAccount {
    constructor(balance) {
        this.balance = 0;
        this.transactions = {
            credits: [],
            debits: []
        };
    }

    credit(amount){
        this.balance += amount;
        this.transactions.credits.push(amount);
    } //adds money into account

    debit(amount){
        this.balance -= amount;
        this.transactions.debits.push(amount);
    } //deducts money from account

    checkBalance(){
        return `Your account balance is \$${this.balance}`;
    } //gives user their balance with a message "Your account balance is $120" (or whatever accurate amount is)

    getTransactions(){
        return this.transactions;
    } //returns an object of all transactions
    // transactions data should be stored like:
    //   transactions = {
    //       credits: [],
    //       debits: []
    //
    //   }
}

class CheckingAccount extends BankAccount{
    constructor() {
        super();
    }

    debit(amount){
        if(this.balance<amount){
            return "debit denied: insufficient funds";
        }
        else{
            super.debit(amount);
        }

        // Charge fee for going under $50.
        if(this.balance<50){
            super.debit(40);
        }
    }
}

class SavingsAccount extends BankAccount{ // needs to be a subclass of BankAccount, should have a remainingDebits property
    constructor() {
        super();
        this.remainingDebits = 10;
        this.linkedCheckingAccount = null;
    }

    linkToChecking(checkingAccount){
        this.linkedCheckingAccount = checkingAccount;
    } // needs to be able to inject access to an instance of a CheckingAccount so that the
    // transfer method can work

    static transfer(savingsAccount, amount) {
        if (savingsAccount.linkedCheckingAccount) {
            // account is linked
            savingsAccount.debit(amount);
            savingsAccount.linkedCheckingAccount.credit(amount);
            return "Transfer succeeded."
        } else {
            return "Transfer denied: no linked checking account";
        }
        // should return "Transfer denied: no linked checking account" if there is no linked checking account
        // can transfer money from savings to checking (unidirectional)
    }

    debit(amount) {
        let fee = 0;
        if (this.remainingDebits <= 0) {
            fee = 50;
        }
        super.debit(amount + fee);
        this.remainingDebits--;
    }
}
