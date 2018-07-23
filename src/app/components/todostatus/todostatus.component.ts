import { Component, OnInit } from "@angular/core";
import { fromService } from "../../services/form.service";
@Component({
  selector: "app-todostatus",
  templateUrl: "./todostatus.component.html",
  styleUrls: ["./todostatus.component.css"]
})
export class TodostatusComponent implements OnInit {
  constructor() {}
  todos = [];
  count = 0;
  ngOnInit() {}
 
}
