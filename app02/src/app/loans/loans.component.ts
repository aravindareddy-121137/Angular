import { Component, OnInit } from '@angular/core';
import { Loan } from '../models/loan';
import { LoanService } from '../services/loan.service';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.css']
})
export class LoansComponent implements OnInit {

  loan:Loan;

  constructor(private loanService:LoanService) {
    this.loan={loanAmount:1000,term:1,roi:1,emis:[]};
    this.loan=loanService.computeEMIs(this.loan);
  }

  ngOnInit(): void {
  }

  compute(){
    this.loan=this.loanService.computeEMIs(this.loan);
  }
}
