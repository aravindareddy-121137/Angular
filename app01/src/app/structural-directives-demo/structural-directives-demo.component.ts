import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives-demo',
  templateUrl: './structural-directives-demo.component.html',
  styleUrls: ['./structural-directives-demo.component.css']
})
export class StructuralDirectivesDemoComponent implements OnInit {

  friends:string[];
  friend:string;

  constructor() {
    this.friends=["Vamsy","Komal","Sravan"];
    this.friend="";
  }

  ngOnInit(): void {
  }

  add(){
    this.friends.push(this.friend);
    this.friend="";
  }

  delete(){
    let index = this.friends.findIndex(f => f===this.friend);
    this.friends.splice(index,1);
  }
}
