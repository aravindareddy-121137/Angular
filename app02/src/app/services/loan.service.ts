import { Injectable } from '@angular/core';
import { Installment } from '../models/installment';
import { Loan } from '../models/loan';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  constructor() { }

  computeEMIs(loan: Loan): Loan {

    loan.emis = [];

    let emisCount = Math.ceil(loan.term * 12);
    let monthlyRate = loan.roi / 12;

    let emi = loan.loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, emisCount)) / (Math.pow(1 + monthlyRate, emisCount) - 1);

    let outstandingAmount = loan.loanAmount;

    for (let i = 1; i <= emisCount; i++) {
      let inst: Installment = { emiNumber: i, emi: emi, principalComponent: 0, interestComponent: 0 };

      inst.interestComponent = outstandingAmount*monthlyRate;
      inst.principalComponent = inst.emi-inst.interestComponent;
      outstandingAmount = outstandingAmount - inst.principalComponent;

      loan.emis.push(inst);
    }

    return loan;
  }
}
