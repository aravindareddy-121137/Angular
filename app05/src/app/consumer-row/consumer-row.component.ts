import { Component, Input, OnInit } from '@angular/core';
import { Consumer } from '../models/consumer';

@Component({
  selector: 'app-consumer-row',
  templateUrl: './consumer-row.component.html',
  styleUrls: ['./consumer-row.component.css']
})
export class ConsumerRowComponent implements OnInit {

  @Input()
  consumer!:Consumer;

  constructor() { }

  ngOnInit(): void {
  }

}
