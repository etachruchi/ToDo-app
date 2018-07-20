import { Component, OnInit } from "@angular/core";
import { fromService } from "../../services/form.service";
import { Location } from "@angular/common";


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
  // saveTodo(todo) {
  //   todo["id"] = this.count;
  //   this.todos.push(todo);
  //   ++this.count;
  //   console.log(todo.length);
  // }
}
