import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoansComponent } from './loans/loans.component';
import { NumberSeriesGroupComponent } from './number-series-group/number-series-group.component';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'/pd'},
  {path:'pd',component:PipesDemoComponent},
  {path:'lns',component:LoansComponent},
  {path:'obdemo',component:NumberSeriesGroupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
