import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ConsumersComponent } from './consumers/consumers.component';
import { ConsumerFormComponent } from './consumer-form/consumer-form.component';
import { ConsumerRowComponent } from './consumer-row/consumer-row.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ConsumersComponent,
    ConsumerFormComponent,
    ConsumerRowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
