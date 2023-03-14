import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatepolicyComponent } from './createpolicy/createpolicy.component';
import { EditpolicyComponent } from './editpolicy/editpolicy.component';
import { SearchpolicyComponent } from './searchpolicy/searchpolicy.component';
import { ViewpolicyinformComponent } from './viewpolicyinform/viewpolicyinform.component';

const routes:Routes=[
  {
    path: '',
    component: SearchpolicyComponent,
  },{
    path: 'createpolicy',
    component:CreatepolicyComponent
  },
  {
    path: 'editpolicy/:policyId',
    component:EditpolicyComponent
  },
  {
    path: "viewpolicyinform/:policyId",
    component:ViewpolicyinformComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
