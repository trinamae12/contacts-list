import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AddContactComponent } from './add-contact/add-contact.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { DeleteContactComponent } from './delete-contact/delete-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    ContactsListComponent,
    EditContactComponent,
    DeleteContactComponent,
    ContactDetailsComponent,
    AddContactComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    RouterModule.forChild([{
      path: '',
      component: ContactsListComponent
    },
    {
      path: 'contact-details/:contactId',
      component: ContactDetailsComponent
    }])
  ],
  entryComponents: [
    DeleteContactComponent,
    EditContactComponent,
    AddContactComponent
  ],
  exports: [
    ContactsListComponent,
    DeleteContactComponent,
    EditContactComponent
  ]
})
export class ContactsModule { }
