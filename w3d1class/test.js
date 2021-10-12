describe("Account class test", function () {
    let account = new Account("0001");

    it("checks the toString method", function () {
        assert.equal("Account 0001: balance 0", account.toString());
    });

    it("checks deposit method", function () {
        assert.equal(0, account.getBalance());
        account.deposit(100);
        assert.equal(100, account.getBalance());
    });

    it("checks withdraw method", function () {
        assert.equal(100, account.getBalance());
        account.withdraw(80);
        assert.equal(20, account.getBalance());
    });
});

describe("SavingsAccount class test", function () {
    let savingsAccount = new SavingsAccount("0001", 5.0);

    it("checks the toString method", function () {
        assert.equal("Savings Account 0001: balance 0", savingsAccount.toString());
    });

    it("checks the interest getter setter", function () {
        assert.equal(5.0, savingsAccount.getInterest());
        savingsAccount.setInterest(5.5);
        assert.equal(5.5, savingsAccount.getInterest());
    });

    it("checks addInterest method", function () {
        assert.equal(0, savingsAccount.getBalance());
        savingsAccount.deposit(100);
        savingsAccount.addInterest();
        assert.equal(105.5, savingsAccount.getBalance());
    });
});

describe("CheckingAccount class test", function () {
    let checkingAccount = new CheckingAccount("0001", 100);

    it("checks the toString method", function () {
        assert.equal("Checking Account 0001: balance 0", checkingAccount.toString());
    });

    it("checks the overdraft limit getter setter", function () {
        assert.equal(100, checkingAccount.getOverdraftLimit());
        checkingAccount.setOverdraftLimit(50);
        assert.equal(50, checkingAccount.getOverdraftLimit());
    });

    it("checks withdraw negative balance", function () {
        assert.equal(0, checkingAccount.getBalance());
        checkingAccount.deposit(100);
        checkingAccount.withdraw(120);
        assert.equal(-20, checkingAccount.getBalance());
    });

    it("checks withdraw more than overdraft limit", function () {
        assert.throws(
            () => checkingAccount.withdraw(200),
            Error,
            "Insufficient funds"
        );
    });
});

describe("Bank class test", function () {
    let bank = new Bank();

    it("checks the addAccount method", function () {
        assert.equal(1, bank.addAccount());
    });

    it("checks the addSavingsAccount method", function () {
        assert.equal(2, bank.addSavingsAccount(10));
    });

    it("checks the addCheckingAccount method", function () {
        assert.equal(3, bank.addCheckingAccount(100));
    });

    it("checks the closeAccount & accountReport method", function () {
        bank.addCheckingAccount(100)
        bank.closeAccount(3)
        assert.equal("Account 1: balance 0\nSavings Account 2: balance 0\nChecking Account 4: balance 0",
            bank.accountReport());
    });
});