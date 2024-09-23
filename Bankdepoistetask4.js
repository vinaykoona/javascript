let BankAccount={
    accountNumber:2920292902029,
    accountName:"Vinay",
    Balance:20000,

//method to deposit
deposit(amount){
    if(amount>0){
        this.Balance+=amount;
        console.log(`Deposit $${amount}. New balance is $${this.Balance}.`);
    
    }else{
        console.log("deposit done")
    }
},

 withdraw(amount){
    if(amount>0){
        if(amount<=this.Balance){
            this.Balance-=amount;
            console.log(`Withdraw $${amount}. New balance is $${this.Balance}.`);

        }else {
            console.log("Insufficient funds.");
        }
    } else {
        console.log("Withdrawal amount must be positive.");
    }
},


    // Method to check balance
    checkBalance(){
        console.log(`Current balance is $${this.Balance}.`);
        return this.Balance;
    }
}
BankAccount.deposit(4000);
BankAccount.withdraw(3000);
BankAccount.checkBalance();

    




