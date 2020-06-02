import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ContactsListComponent } from "./contacts-list/contacts-list.component";
import { ContactDetailsComponent } from "./contact-details/contact-details.component";
import { AddContactComponent } from "./add-contact/add-contact.component";
import { EditContactComponent } from "./edit-contact/edit-contact.component";

const routes: Routes = [
  {
    path: "",
    component: ContactsListComponent,
  },
  {
    path: "contact/add",
    component: AddContactComponent,
  },
  {
    path: "contact/edit/:id",
    component: EditContactComponent,
  },
  {
    path: "contact-details/:contactId",
    component: ContactDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
