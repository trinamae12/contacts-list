import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent {

  contact: Object = {};

  constructor(public activeModal: NgbActiveModal,
              private service: ContactsService) { }

  addContact() {
     this.service.addToContact(this.contact);
     this.activeModal.close();
  }
}
