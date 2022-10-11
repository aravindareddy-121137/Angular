import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  banner:string;

  constructor() {
    this.banner="My First Angular App";
  }

  ngOnInit(): void {
  }

}
