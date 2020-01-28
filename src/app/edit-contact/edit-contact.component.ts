import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ContactsService } from '../contacts.service';

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
    delete this.contact.id;
    this.service.editContact(this.contact, this.contactId);
    this.close();
  }

  close() {
    this.modal.close();
  }
  
  ngOnInit() {
  }

}
