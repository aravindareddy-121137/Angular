import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Consumer } from '../models/consumer';
import { ConsumerService } from '../services/consumer.service';

@Component({
  selector: 'app-consumer-form',
  templateUrl: './consumer-form.component.html',
  styleUrls: ['./consumer-form.component.css']
})
export class ConsumerFormComponent implements OnInit {

  cid:FormControl;
  fnm:FormControl;
  mid:FormControl;
  f:FormGroup;

  errMsg!:string;
  isNew:boolean;

  constructor(private consumerService:ConsumerService,private router:Router,private activatedRoute:ActivatedRoute) { 
    this.cid=new FormControl(0);
    this.fnm=new FormControl("",[Validators.required]);
    this.mid=new FormControl("",[Validators.required,Validators.email]);

    this.f = new FormGroup({consumerId:this.cid,fullName:this.fnm,mailId:this.mid});
  
    this.isNew=true;
  }

  ngOnInit(): void {
    let cid = this.activatedRoute.snapshot.params["cid"];
    if(cid){
      this.isNew=false;
      this.consumerService.getById(cid).subscribe({
        next: data => { this.f.reset(data); },
        error: err => {console.log(err); this.errMsg="Unable to fetech details! Please retry later!"}  
      });
    }
  }

  save(){
    let ob = this.isNew? this.consumerService.add(this.f.value):this.consumerService.update(this.f.value);
    ob.subscribe({
      next: data => { this.router.navigateByUrl("/consumers"); },
      error: err => {console.log(err); this.errMsg="Unable to save! Please retry later!"}
    });
  }
}
