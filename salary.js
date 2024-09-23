function caclculatesalary(monthlypayscale,deductions){
    //fixedsalary
    const fixedsalary=25000;
    //finalsalary is calculated with fixedsalarysubsuite deductions
    const finalsalary=fixedsalary-deductions;
    //display final salary 
    console.log(`monthlypayscale,${monthlypayscale}`);
    console.log(`deductions,${deductions}`);
    console.log(`finalsalary,${finalsalary}`);
}
caclculatesalary('standardsalary',5000);
// caclculatesalary('standardsalary',15000);

