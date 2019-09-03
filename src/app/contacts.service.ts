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

  constructor() { }
}
