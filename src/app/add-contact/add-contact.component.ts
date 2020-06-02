import { Component } from "@angular/core";
import { ContactsService } from "../contacts.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-contact",
  templateUrl: "./add-contact.component.html",
  styleUrls: ["./add-contact.component.scss"],
})
export class AddContactComponent {
  constructor(private service: ContactsService, private router: Router) {}

  contact: any = {};

  addContact() {
    this.service.addToContact(this.contact);
    this.close();
  }

  close() {
    this.router.navigateByUrl("/");
  }
}
