import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ContactsService } from '../contacts.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent {

  contact: Object = {};

  constructor(public activeModal: NgbActiveModal,
              private service: ContactsService,
              private router: Router) { }

  addContact() {
     this.service.addToContact(this.contact);
     this.close();
  }

  close() {
    this.activeModal.close();
  }
}
