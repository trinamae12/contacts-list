import { Component, OnInit } from '@angular/core';
import { contacts } from '../contacts';
import { DeleteContactComponent } from '../delete-contact/delete-contact.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {
  contacts = contacts;

  constructor(private modal: NgbModal) { }

  openDeleteModal(contactId){
    const modalRef = this.modal.open(DeleteContactComponent);
    modalRef.componentInstance.contactId = contactId;
  }

  ngOnInit() {
  }

}
