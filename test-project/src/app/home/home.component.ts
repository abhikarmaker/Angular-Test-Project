import { Component, OnInit } from "@angular/core";
import { Employee } from "../models/employee";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  employeeData: Employee[] = [];
  constructor() {}

  ngOnInit() {
    this.employeeData.push(new Employee(1, "abhi", "Dev", 10000));
    this.employeeData.push(new Employee(2, "john", "QA", 10000));
    this.employeeData.push(new Employee(3, "Adam", "PM", 10000));
    this.employeeData.push(new Employee(4, "Joe", "SEO", 10000));
  }
}
