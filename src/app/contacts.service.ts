import { Injectable } from '@angular/core';
import { contacts } from '../app/contacts';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  
  constructor(private firestore: AngularFirestore) { }

  contacts = contacts;

  getContacts() {
    return this.firestore.collection('contacts').snapshotChanges();
  }

  addToContact(contact) {
    this.firestore.collection('contacts')
                  .add({
                    name: contact.name,
                    phone_number: contact.phone_number,
                    address: contact.address
                  });
  }

  deleteContact(contactId) {
    this.contacts.splice(contactId,1);
  }

  editContact(contact, contactId) {
    this.contacts[contactId].name = contact.name;
    this.contacts[contactId].phone_number = contact.phone_number;
    this.contacts[contactId].address = contact.address;
  }
}
