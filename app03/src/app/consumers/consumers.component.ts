import { Component, OnInit } from '@angular/core';
import { Consumer } from '../models/consumer';
import { ConsumerService } from '../services/consumer.service';

@Component({
  selector: 'app-consumers',
  templateUrl: './consumers.component.html',
  styleUrls: ['./consumers.component.css']
})
export class ConsumersComponent implements OnInit {

  consumers!:Consumer[];
  errMsg!:string;

  constructor(private consumerService:ConsumerService) { }

  ngOnInit(): void {
    this.consumerService.getAll().subscribe({
      next: data => this.consumers=data,
      error: err => { console.log(err); this.errMsg="Unable to load data! Please retry later";}
    });
  }

}
