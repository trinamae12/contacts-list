import { Injectable } from '@angular/core';
import { contacts } from '../app/contacts';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  contacts = contacts;

  addToContact(contact) {
    this.contacts.push(contact);
  }

  deleteContact(contactId) {
    this.contacts.splice(contactId,1);
  }

  constructor() { }
}
