import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

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
import { EditContactComponent } from './edit-contact/edit-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactsListComponent,
    TopNavComponent,
    ContactDetailsComponent,
    AddContactComponent,
    DeleteContactComponent,
    EditContactComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  entryComponents: [
    AddContactComponent,
    DeleteContactComponent,
    EditContactComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
