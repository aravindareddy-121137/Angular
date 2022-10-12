import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent implements OnInit {

  p:number;
  t:number;
  r:number;

  si:number;
  emi:number;

  constructor() {
    this.r=0;
    this.p=0;
    this.t=0;

    this.si=0;
    this.emi=0;
  }

  ngOnInit(): void {
  }

  compute(){
    this.si = (this.p*this.t*this.r)/100;
    let factor = Math.pow(1+this.r,this.t);
    this.emi = (this.p * this.r * factor) /(factor-1); 
  }
}
