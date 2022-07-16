import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserIndexComponent } from './user-index/user-index.component';
import { UserRegComponent } from './user-reg/user-reg.component';

const routes: Routes = [
  { path: '', component: UserIndexComponent},
  { path: 'user-index', component: UserIndexComponent},
  { path: 'user-reg', component: UserRegComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [UserIndexComponent, UserRegComponent]
