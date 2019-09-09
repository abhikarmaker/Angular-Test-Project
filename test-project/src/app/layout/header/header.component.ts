import { Component } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
  template: `
    <img src="../assets/images/header1.jpg" />
  `
})
export class HeaderComponent {
  constructor() {}
}
