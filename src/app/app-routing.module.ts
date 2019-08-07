import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ContactsListComponent} from './contacts-list/contacts-list.component';


const routes: Routes = [
  {
    path: '',
    component: ContactsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
