import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Consumer } from '../models/consumer';
import { ConsumerService } from '../services/consumer.service';

@Component({
  selector: 'app-consumer-form',
  templateUrl: './consumer-form.component.html',
  styleUrls: ['./consumer-form.component.css']
})
export class ConsumerFormComponent implements OnInit {

  consumer:Consumer;
  errMsg!:string;
  isNew:boolean;

  constructor(private consumerService:ConsumerService,private router:Router,private activatedRoute:ActivatedRoute) { 
    this.consumer={consumerId:0,fullName:'',mailId:''};
    this.isNew=true;
  }

  ngOnInit(): void {
    let cid = this.activatedRoute.snapshot.params["cid"];
    if(cid){
      this.isNew=false;
      this.consumerService.getById(cid).subscribe({
        next: data => { this.consumer=data; },
        error: err => {console.log(err); this.errMsg="Unable to fetech details! Please retry later!"}  
      });
    }
  }

  save(){
    let ob = this.isNew? this.consumerService.add(this.consumer):this.consumerService.update(this.consumer);
    ob.subscribe({
      next: data => { this.router.navigateByUrl("/consumers"); },
      error: err => {console.log(err); this.errMsg="Unable to save! Please retry later!"}
    });
  }
}
