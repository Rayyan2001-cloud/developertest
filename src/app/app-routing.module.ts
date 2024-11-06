import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewempComponent } from './viewemp/viewemp.component';
import { AddempComponent } from './addemp/addemp.component';
import { EditempComponent } from './editemp/editemp.component';

const routes: Routes = [
  {
    path:'',
    component:ViewempComponent
  },
  {
    path:'addEmp',
    component:AddempComponent
  },
  {
    path:'editEmp/:id',
    component:EditempComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
