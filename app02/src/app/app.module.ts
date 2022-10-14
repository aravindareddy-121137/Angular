import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';
import { LoansComponent } from './loans/loans.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PipesDemoComponent,
    LoansComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
