import { Component, OnInit } from '@angular/core';
import { contacts } from '../contacts';
import { ApiService } from '../api.service';
import { Contact } from '../contact';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {
  //contacts = contacts;
  contacts: Contact[] = [];

  constructor(private api: ApiService) { }

  getContacts(){
    this.api.getContacts().subscribe(res => {
      this.contacts = res;
      console.log(contacts);
    }, err => {
      console.log(err);
    });
  }

  ngOnInit() {
    this.getContacts();
  }

}
