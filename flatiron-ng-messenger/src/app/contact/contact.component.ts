import { Component, Input, OnInit } from "@angular/core";
import { User } from "../user";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"],
})
export class ContactComponent implements OnInit {
  @Input() user: User;

  constructor() {}

  ngOnInit(): void {}
}
