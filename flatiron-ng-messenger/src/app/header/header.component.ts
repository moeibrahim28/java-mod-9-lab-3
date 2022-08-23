import { Component, OnInit } from "@angular/core";
import { User } from "../user";

@Component({
  selector: "app-header-component",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponentComponent implements OnInit {
  activeUser: User = {
    firstName: "Maria",
  };

  constructor() {}

  ngOnInit(): void {}
}