import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbActiveModal ,NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddContactComponent } from '../add-contact/add-contact.component';

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
