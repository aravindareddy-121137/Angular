import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Consumer } from '../models/consumer';

@Component({
  selector: 'app-consumer-row',
  templateUrl: './consumer-row.component.html',
  styleUrls: ['./consumer-row.component.css']
})
export class ConsumerRowComponent implements OnInit {

  @Input()
  consumer!: Consumer;

  @Output()
  doDelete: EventEmitter<number>;

  @Output()
  markEditable: EventEmitter<number>;

  constructor() {
    this.doDelete = new EventEmitter<number>();
    this.markEditable = new EventEmitter<number>();
  }

  ngOnInit(): void {
  }

  raiseDeleteEvent() {
    this.doDelete.emit(this.consumer.consumerId);
  }

  raiseMarkEditableEvent(){
    this.markEditable.emit(this.consumer.consumerId);
  }
}
