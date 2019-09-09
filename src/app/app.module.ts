import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddContactComponent } from './add-contact/add-contact.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DeleteContactComponent } from './delete-contact/delete-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactsListComponent,
    TopNavComponent,
    ContactDetailsComponent,
    AddContactComponent,
    DeleteContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  entryComponents: [
    AddContactComponent,
    DeleteContactComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
