class loan{}
    function init(self, loanAmount, interestRate, loanTerm){
        self.loanAmount = loanAmount
        self.interestRate = interestRate / 100 
        //   Convert percentage to decimal
        self.loanTerm = loanTerm
    }


    function calculateMonthlyPayment(self){
        //  Monthly interest rate
        monthlyInterestRate = self.interestRate / 12
        // #Calculate the monthly payment using the formula:
        EMI = P * r * (1 + r)^n / ((1 + r)^n - 1)
        if (monthlyInterestRate == 0){
            return self.loanAmount / self.loanTerm
        }
        else{
            emi = (self.loanAmount * monthlyInterestRate * (1 + monthlyInterestRate) ** self.loanTerm) 
                  ((1 + monthlyInterestRate) ** self.loanTerm - 1)
            return emi
        }
    }

    function checkLoanStatus(self, paymentsMade){
        // Monthly payment
        emi = self.calculateMonthlyPayment()
        // Remaining balance calculation
        remainingBalance = self.loanAmount
        monthlyInterestRate = self.interestRate / 12
        
        for_ in range(paymentsMade);
            interestPayment = remainingBalance * monthlyInterestRate
            principalPayment = emi - interestPayment
            remainingBalance -= principalPayment
        
        if( remainingBalance < 0){
            remainingBalance = 0
        }
        totalPaid = emi * paymentsMade
        return {
            "totalPaid": totalPaid,
            "remainingBalance": remainingBalance,
            "paymentsMade": paymentsMade
        }
    }


// Example usage
loan  = new  loan(100000, 5, 12)
print("Monthly Payment (EMI):", loan.calculateMonthlyPayment())
status = loan.checkLoanStatus(12)
print("Loan Status:", status)
