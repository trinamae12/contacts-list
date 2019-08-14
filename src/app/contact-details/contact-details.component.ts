import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { contacts } from '../contacts';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {
  contact;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.contact = contacts[+params.get('contactId')];
    });
  }

}
