import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsumerFormComponent } from './consumer-form/consumer-form.component';
import { ConsumersComponent } from './consumers/consumers.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'/consumers'},
  {path:'consumers',component:ConsumersComponent},
  {path:'addConsumer',component:ConsumerFormComponent},
  {path:'editConsumer/:cid',component:ConsumerFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
