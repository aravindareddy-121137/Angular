import { Component, OnInit } from '@angular/core';
import { Consumer } from '../models/consumer';
import { ConsumerService } from '../services/consumer.service';

@Component({
  selector: 'app-consumers',
  templateUrl: './consumers.component.html',
  styleUrls: ['./consumers.component.css']
})
export class ConsumersComponent implements OnInit {

  consumers!: Consumer[];
  errMsg!: string;

  constructor(private consumerService: ConsumerService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.consumerService.getAll().subscribe({
      next: data => this.consumers = data,
      error: err => { console.log(err); this.errMsg = "Unable to load data! Please retry later"; }
    });
  }

  doDelete(cid: number) {
    if (window.confirm("Are you sure of deleting consumer#" + cid + "?")) {
      this.consumerService.deleteById(cid).subscribe({
        next: () => this.loadData(),
        error: err => { console.log(err); this.errMsg = "Unable to delete data! Please retry later"; }
      });
    }
  }
}
