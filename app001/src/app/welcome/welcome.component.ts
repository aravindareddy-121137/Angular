import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  userName:string;

  logoIndex:number;
  logos:string[];
  logoWidth:number;

  applyBorder:boolean;
  applyCenter:boolean;

  constructor() {
    this.userName="Vamsy Kiran Aripaka";
    this.logoIndex=0;
    this.logos=[
      "assets/imgs/n1.png",
      "assets/imgs/n2.png",
      "assets/imgs/n3.png",
      "assets/imgs/n4.jpg"
    ];
    this.logoWidth=200;
    this.applyBorder=true;
    this.applyCenter=true;
  }

  ngOnInit(): void {
  }

  toggle(){
    this.logoIndex++;
    if(this.logoIndex==this.logos.length){
      this.logoIndex=0;
    }
  }
}
