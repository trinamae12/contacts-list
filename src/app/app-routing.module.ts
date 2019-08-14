import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ContactsListComponent} from './contacts-list/contacts-list.component';
import {ContactDetailsComponent} from './contact-details/contact-details.component';


const routes: Routes = [
  {
    path: '',
    component: ContactsListComponent
  },
  {
    path: 'products/:productId',
    component: ContactDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
