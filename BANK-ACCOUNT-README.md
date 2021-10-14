# Object Oriented Bank Accounts
Below, you have a stubbed out BankAccount class, and you also have two subclasses that need to inherit from that BankAccount class: CheckingAccount and SavingsAccount. Please implement the following functionality to pass the tests!

## BankAccount
Given the BankAccount class below, implement its stubbed out methods.

## CheckingAccount
Do the same for CheckingAccount as you did for BankAccount, but add a little more functionality specific to checking accounts. Checking accounts are penalized when they dip below a $50 balance. If the balance in the account hits below $50, there is a $40 fee applied to the checking account. Account holders should be prevented from making debits that will overdraft the account.

## SavingsAccount
Do the same for SavingsAccount as you did for CheckingAccount! Savings accounts can only be debitn from 10 times during the existence of the account, and any additional debits or transfers will result in a $50 debit from their savings account. Account holders are also able to transfer money from their savings account to their checking account using the transfer method you see stubbed out. NOTE: The SavingsAccount.transfer method is a static method. In addition to this, savings accounts have the same credit (deposit), debit (withdrawal), checkBalance and getTransactions methods as its parent class, BankAccount.

Feel free to edit anything you want to implement the functionality you need.

```javascript
describe('Bank Account', function() {

    it("credit() should credit the given amount of money into the account ", () => {
        var bankAccount = new BankAccount()
        bankAccount.credit(100)
        bankAccount.credit(10)
        expect(bankAccount.balance).to.equal(110)
    })


    it("debit() should debit the given amount of money from the account ", () => {
        var bankAccount = new BankAccount()
        bankAccount.credit(500)
        bankAccount.debit(100)
        expect(bankAccount.balance).to.equal(400)
    })


    it("checkBalance() should return the current balance of the account", function() {
        var bankAccount = new BankAccount();
        bankAccount.credit(100)
        bankAccount.credit(40)
        bankAccount.debit(20)
        expect(bankAccount.balance).to.equal(120)
        expect(bankAccount.checkBalance()).to.equal(`Your account balance is $120`)
    })


    it("getTransactions() should return a list of credits and debits from the account", () => {
        var bankAccount = new BankAccount();
        bankAccount.credit(100)
        bankAccount.credit(250)
        bankAccount.debit(100)
        bankAccount.debit(50)
        expect(bankAccount.balance).to.equal(200)
        expect(bankAccount.getTransactions().credits[1]).to.equal(250)
        expect(bankAccount.getTransactions().debits[0]).to.equal(100)
    })
})

describe('Checking Account ', function() {

    it("should be an instance of a subclass of BankAccount",()=>{
        expect(CheckingAccount.prototype instanceof BankAccount).to.equal(true)
    })

    it("should not allow users to overdraft", () => {
        var checkingAccount = new CheckingAccount();
        checkingAccount.credit(100)
        expect(checkingAccount.debit(105)).to.equal("debit denied: insufficient funds")
    })
    it("it should assess a $40 fee if a debit will bring the balance under $50", () => {
        var checkingAccount = new CheckingAccount();
        checkingAccount.credit(100)
        checkingAccount.debit(60)
        expect(checkingAccount.balance).to.equal(0)
    })

})


describe('Savings Account', function() {
     it("should be an instance of a subclass of BankAccount",()=>{
        expect(SavingsAccount.prototype instanceof BankAccount).to.equal(true)
    })
    it ("should return 'Transfer denied: no linked checking account' if a checking account hasn't been linked when transfer() is called", ()=>{
        var savingsAccount = new SavingsAccount();
        savingsAccount.credit(1000);
        expect(SavingsAccount.transfer(savingsAccount, 400)).to.equal('Transfer denied: no linked checking account')
    })
    it("should allow a user to transfer money from savings account into checking account", () => {
        var checkingAccount = new CheckingAccount();
        checkingAccount.credit(500)
        expect(checkingAccount.balance).to.equal(500)
        var savingsAccount = new SavingsAccount();
        expect(savingsAccount.balance).to.equal(0)
        savingsAccount.credit(1000)
        savingsAccount.linkToChecking(checkingAccount);
        SavingsAccount.transfer(savingsAccount, 300);
        expect(savingsAccount.balance).to.equal(700);
        expect(checkingAccount.balance).to.equal(800);
    })
    it("Has an allowed debit limit of 10 and decrements remainingDebits for every debit", () => {
        var savingsAccount = new SavingsAccount();
        expect(savingsAccount.remainingDebits).to.equal(10)
        savingsAccount.credit(1000)
        savingsAccount.debit(10)
        savingsAccount.debit(10)
        savingsAccount.debit(10)
        savingsAccount.debit(10)
        savingsAccount.debit(10)
        savingsAccount.debit(10)
        savingsAccount.debit(10)
        savingsAccount.debit(10)
        savingsAccount.debit(10)
        expect(savingsAccount.remainingDebits).to.equal(1)
        savingsAccount.debit(10)
        expect(savingsAccount.remainingDebits).to.equal(0)
    })
    it("debits $50 from the savings account if the allowed debit limit of 10 is exceeded", () => {
        var savingsAccount = new SavingsAccount();
        expect(savingsAccount.remainingDebits).to.equal(10)
        savingsAccount.credit(1000)
        savingsAccount.debit(10)
        savingsAccount.debit(10)
        savingsAccount.debit(10)
        savingsAccount.debit(10)
        savingsAccount.debit(10)
        savingsAccount.debit(10)
        savingsAccount.debit(10)
        savingsAccount.debit(10)
        savingsAccount.debit(10)
        savingsAccount.debit(10)
        expect(savingsAccount.remainingDebits).to.equal(0)
        expect(savingsAccount.balance).to.equal(900)
        savingsAccount.debit(10)
        expect(savingsAccount.balance).to.equal(840)
    })
})
``