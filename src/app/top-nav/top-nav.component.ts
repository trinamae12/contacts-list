import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AddContactComponent } from '../contacts/add-contact/add-contact.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
  }

  open() {
    const modalRef = this.modalService.open(AddContactComponent);
  }

}
