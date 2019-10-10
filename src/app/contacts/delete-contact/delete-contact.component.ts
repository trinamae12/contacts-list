import { Component, OnInit, Input } from '@angular/core';

import { ContactsService } from '../contacts.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delete-contact',
  templateUrl: './delete-contact.component.html',
  styleUrls: ['./delete-contact.component.scss']
})
export class DeleteContactComponent implements OnInit {
  @Input() public contactId;

  constructor(public modal: NgbActiveModal,
              private service: ContactsService) { }

  close() {
    this.modal.close();
  }
  
  deleteContact() {
    this.service.deleteContact(this.contactId);
    this.modal.close();
  }
  ngOnInit() {
  }

}
