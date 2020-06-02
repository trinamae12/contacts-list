import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ContactsService } from "../contacts.service";

@Component({
  selector: "app-contact-details",
  templateUrl: "./contact-details.component.html",
  styleUrls: ["./contact-details.component.scss"],
})
export class ContactDetailsComponent implements OnInit {
  contact;

  constructor(
    private route: ActivatedRoute,
    private service: ContactsService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.service.getContact(params.get("contactId")).subscribe((details) => {
        this.contact = details.payload.data();
      });
    });
  }
}
