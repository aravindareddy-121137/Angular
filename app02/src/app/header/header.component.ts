import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  brandName:string;

  constructor() {
    this.brandName = "SimpleLoans.com"
  }

  ngOnInit(): void {
  }

}
