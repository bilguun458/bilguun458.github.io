"use strict";

class Bank {
    constructor() {
        this._accounts = [];
    }

    static nextNumber = 1;

    addAccount() {
        let account = new Account(Bank.nextNumber++);
        this._accounts.push(account);
        return account.getNumber();
    }

    addSavingsAccount(interest) {
        let account = new SavingsAccount(Bank.nextNumber++, interest);
        this._accounts.push(account);
        return account.getNumber();
    }

    addCheckingAccount(overdraft) {
        let account = new CheckingAccount(Bank.nextNumber++, overdraft);
        this._accounts.push(account);
        return account.getNumber();
    }

    closeAccount(number) {
        const index = this._accounts.findIndex((acc) => acc.getNumber() == number);
        if (index > -1) {
            this._accounts.splice(index, 1);
        }
    }

    accountReport() {
        return this._accounts.map((acc) => acc.toString()).join("\n");
    }

    endOfMonth() {
        return this._accounts.map((acc) => acc.endOfMonth()).join("\n");
    }
}