import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { AddContactComponent } from './add-contact/add-contact.component';


const routes: Routes = [
  {
    path: '',
    component: ContactsListComponent
  },
  {
    path: 'contact-details/:contactId',
    component: ContactDetailsComponent
  },
  {
    path: 'contact-add',
    component: AddContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
