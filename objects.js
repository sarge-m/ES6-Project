//var students = ['John', 'Sammy', 'Jaime', 'Mike', 'Jane'];
//var grades = [90, 99, 89, 100, 80];

var loans = [];

var loan1 = {
    id: '1',
    customerName: 'Francisco Denton',
    phoneNumber: '7854329009',
    address: '97 Sigley Road Hays, Kansas(KS), 67601',
    loanAmount: '5000',
    interest: '2',
    loanTermYears: 4,
    loanType: 'auto',
    description: 'Car loan',
    calculatedLoanAmount: function (){
            return this.loanAmount * (this.interest/100) * this.loanTermYears;
    }
}

var loan2 = {
    id: '2',
    customerName: 'Lana P Flores',
    phoneNumber: '7854329009',
    address: '97 Sigley Road Hays, Kansas(KS), 67601',
    loanAmount: '8000',
    interest: '4',
    loanTermYears: 3,
    loanType: 'auto',
    description: 'Car loan',
    calculatedLoanAmount: function (){
        return this.loanAmount * (this.interest/100) * this.loanTermYears;
    }
}

var loan3 = {
    id: '3',
    customerName: 'Diane P Padilla',
    phoneNumber: '7854329009',
    address: '97 Sigley Road Hays, Kansas(KS), 67601',
    loanAmount: '9000',
    interest: '3',
    loanTermYears: 5,
    loanType: 'auto',
    description: 'Car loan',
    calculatedLoanAmount: function (){
        return this.loanAmount * (this.interest/100) * this.loanTermYears;
    }
}

var loan4 = {
    id: '4',
    customerName: 'Donald C Galloway',
    phoneNumber: '7854329009',
    address: '97 Sigley Road Hays, Kansas(KS), 67601',
    loanAmount: '12000',
    interest: '4',
    loanTermYears: 8,
    loanType: 'auto',
    description: 'Car loan',
    calculatedLoanAmount: function (){
        return this.loanAmount * (this.interest/100) * this.loanTermYears;
    }
}

var loan5 = {
    id: '5',
    customerName: 'Gladys C Clay',
    phoneNumber: '7854329009',
    address: '97 Sigley Road Hays, Kansas(KS), 67601',
    loanAmount: '25000',
    interest: '5',
    loanTermYears: 3,
    loanType: 'auto',
    description: 'Car loan',
    calculatedLoanAmount: function (){
        return this.loanAmount * (this.interest/100) * this.loanTermYears;
    }
}

loans.push(loan1);
loans.push(loan2);
loans.push(loan3);
loans.push(loan4);
loans.push(loan5);
loans.forEach((item)=> console.log("Loan " + item.id + " (Total Interest Owned): $" + item.calculatedLoanAmount() + ", (Actual Loan Amount): $" + (parseInt(item.calculatedLoanAmount()) + parseInt(item.loanAmount))));

//console.log(loans);