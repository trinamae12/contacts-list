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

@NgModule({
  declarations: [
    AppComponent,
    ContactsListComponent,
    TopNavComponent,
    ContactDetailsComponent,
    AddContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule  
  ],
  entryComponents: [
    AddContactComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
