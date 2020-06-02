import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { AddContactComponent } from "../add-contact/add-contact.component";

@Component({
  selector: "app-top-nav",
  templateUrl: "./top-nav.component.html",
  styleUrls: ["./top-nav.component.scss"],
})
export class TopNavComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  goToAddContact = function () {
    this.router.navigateByUrl("/contact/add");
  };
}
