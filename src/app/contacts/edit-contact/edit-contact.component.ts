import { Component, OnInit, Input } from '@angular/core';

import { ContactsService } from '../contacts.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss']
})
export class EditContactComponent implements OnInit {
  @Input() public contact;
  @Input() public contactId;

  constructor(public modal: NgbActiveModal,
              private service: ContactsService) { }

  editContact() {
    this.service.editContact(this.contact, this.contactId);
    this.close();
  }

  close() {
    this.modal.close();
  }
  
  ngOnInit() {
  }

}
