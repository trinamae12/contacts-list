import { Component, OnInit } from '@angular/core';
import { contacts } from '../contacts';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {
  contacts = contacts;
  constructor() { }

  ngOnInit() {
  }

}
