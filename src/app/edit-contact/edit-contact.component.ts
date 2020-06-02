import { Component, OnInit, Input } from "@angular/core";
import { ContactsService } from "../contacts.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-edit-contact",
  templateUrl: "./edit-contact.component.html",
  styleUrls: ["./edit-contact.component.scss"],
})
export class EditContactComponent implements OnInit {
  contact;
  contactId;

  constructor(
    private service: ContactsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.contactId = params.get("id");
      this.service.getContact(params.get("id")).subscribe((details) => {
        this.contact = details.payload.data();
      });
    });
  }

  editContact() {
    delete this.contact.id;
    this.service.editContact(this.contact, this.contactId);
    this.close();
  }

  close() {
    this.router.navigateByUrl("/");
  }
}
