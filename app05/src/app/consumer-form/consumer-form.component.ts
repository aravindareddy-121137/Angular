import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConsumerService } from '../services/consumer.service';

@Component({
  selector: 'app-consumer-form',
  templateUrl: './consumer-form.component.html',
  styleUrls: ['./consumer-form.component.css']
})
export class ConsumerFormComponent implements OnInit {

  @Input()
  consumerId!:number;

  cid:FormControl;
  fnm:FormControl;
  mid:FormControl;
  f:FormGroup;

  errMsg!:string;
  isNew:boolean;

  @Output()
  saved:EventEmitter<void>;

  @Output()
  cancelEvent:EventEmitter<number>;

  constructor(private consumerService:ConsumerService) { 
    this.cid=new FormControl(0);
    this.fnm=new FormControl("",[Validators.required]);
    this.mid=new FormControl("",[Validators.required,Validators.email]);

    this.f = new FormGroup({consumerId:this.cid,fullName:this.fnm,mailId:this.mid});
  
    this.saved=new EventEmitter<void>();
    this.cancelEvent=new EventEmitter<number>();

    this.isNew=true;
  }

  ngOnInit(): void {
    if(this.consumerId){
      this.isNew=false;
      this.consumerService.getById(this.consumerId).subscribe({
        next: data => { this.f.reset(data); },
        error: err => {console.log(err); this.errMsg="Unable to fetech details! Please retry later!"}  
      });
    }
  }

  save(){
    let ob = this.isNew? this.consumerService.add(this.f.value):this.consumerService.update(this.f.value);
    ob.subscribe({
      next: data => { this.saved.emit(); if(this.isNew) { this.f.reset({consumerId:0,fullName:'',mailId:''}); } },
      error: err => {console.log(err); this.errMsg="Unable to save! Please retry later!"}
    });
  }

  raiseCencelEvent(){
    this.cancelEvent.emit(this.f.value.consumerId);
  }
}
