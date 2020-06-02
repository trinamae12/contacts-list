import { Component, OnInit } from "@angular/core";
import { DeleteContactComponent } from "../delete-contact/delete-contact.component";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { EditContactComponent } from "../edit-contact/edit-contact.component";
import { ContactsService } from "../contacts.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-contacts-list",
  templateUrl: "./contacts-list.component.html",
  styleUrls: ["./contacts-list.component.scss"],
})
export class ContactsListComponent implements OnInit {
  contacts = [];

  constructor(
    private modal: NgbModal,
    private service: ContactsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.service.getContacts().subscribe((contactsList) => {
      this.contacts = [];
      contactsList.forEach((contact) => {
        const result = contact.payload.doc.data() as object;
        const { id } = contact.payload.doc;
        const data = { id, ...result };
        this.contacts.push(data);
      });
    });
  }

  openDeleteModal(contactId) {
    const modalRef = this.modal.open(DeleteContactComponent);
    modalRef.componentInstance.contactId = contactId;
  }
}
