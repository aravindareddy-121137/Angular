import { Component, OnInit } from '@angular/core';
import { NumberSeriesService } from '../services/number-series.service';

@Component({
  selector: 'app-number-series',
  templateUrl: './number-series.component.html',
  styleUrls: ['./number-series.component.css']
})
export class NumberSeriesComponent implements OnInit {

  lb:number;
  ub:number;

  results!:number[];
  errMsg!:string|null;
  isJobInProgress!:boolean;

  constructor(private nss:NumberSeriesService) {
    this.lb=0;
    this.ub=0;
  }

  ngOnInit(): void {
  }

  startSeries(){

    this.results=[];
    this.errMsg=null;
    this.isJobInProgress=true;

    let ob = this.nss.generateSeries(this.lb,this.ub);

    ob.subscribe({
      next: n => this.results.push(n),
      error: err => {this.errMsg=err; this.isJobInProgress=false;},
      complete: () => {this.isJobInProgress=false;}
    });
  }
}
