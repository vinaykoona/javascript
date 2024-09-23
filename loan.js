class Loan {
    constructor(name, amount, monthlyIncome, accountBalance) {
        this.name = name;
        this.amount = amount;
        this.monthlyIncome = monthlyIncome;
        this.accountBalance = accountBalance;
        this.status = 'Pending'; // Possible statuses: Pending, Approved, Rejected
    }
}

class LoanManager {
    constructor() {
        this.loans = [];
    }

    applyLoan(name, amount, monthlyIncome, accountBalance) {
        const newLoan = new Loan(name, amount, monthlyIncome, accountBalance);
        this.loans.push(newLoan);
        console.log(`Loan application submitted for ${name}.`);
    }

    approveLoan(loan) {
        if (this.isEligible(loan)) {
            loan.status = 'Approved';
            console.log(`Loan approved for ${loan.name}.`);
        } else {
            this.rejectLoan(loan);
        }
    }

    rejectLoan(loan) {
        loan.status = 'Rejected';
        console.log(`Loan rejected for ${loan.name}.`);
    }

    isEligible(loan) {
        return loan.monthlyIncome >= 30000 && loan.accountBalance >= 1000; // Example criteria
    }

    getLoans() {
        return this.loans;
    }
}

// Initialize the LoanManager
const loanManager = new LoanManager();

// Function to apply for a loan using form data
function applyForLoan() {
    const name = document.getElementById('name').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const monthlyIncome = parseFloat(document.getElementById('monthlyIncome').value);
    const accountBalance = parseFloat(document.getElementById('accountBalance').value);

    loanManager.applyLoan(name, amount, monthlyIncome, accountBalance);
    displayLoans();
    
}

// Function to approve/reject loans
function manageLoans() {
    loanManager.loans.forEach(loan => {
        if (loan.status === 'Pending') {
            loanManager.approveLoan(loan);
        }
    });
    displayLoans();
}

// Function to display loans
function displayLoans() {
    const loansContainer = document.getElementById('loans');
    loansContainer.innerHTML = ''; // Clear previous loans

    loanManager.getLoans().forEach(loan => {
        const loanDiv = document.createElement('div');
        loanDiv.textContent = `Name: ${loan.name}, Amount: ${loan.amount}, Status: ${loan.status}`;
        loansContainer.appendChild(loanDiv);
    });
}
