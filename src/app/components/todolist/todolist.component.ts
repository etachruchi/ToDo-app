import { Component, OnInit } from '@angular/core';
import { fromService } from "../../services/form.service";
@Component({
  selector: "app-todolist",
  templateUrl: "./todolist.component.html",
  styleUrls: ["./todolist.component.css"]
})
export class TodolistComponent implements OnInit {
  list: any;
  selectedTask = { name: "" };
  editable: boolean;

  constructor(private formService: fromService) {}
  ngOnInit() {
    this.getTodos();
  }
  onSelect(task: any): void {
    this.selectedTask = task;
    console.log(task);
  }
  canEdit() {
    this.editable = true;
  }
  getTodos() {
    this.list = this.formService.getTodos();
    console.log(this.list);
  }
  editTodos(task) {
    this.formService.editTodos(task);
    console.log(task);
  }
  clearTodos() {
    this.list = this.formService.getTodos();
    this.editable = false;
    console.log(this.list);
  }
  deleteTodos(task) {
    alert("Are you sure you want to delete");
    this.formService.deleteTodos(task);
    console.log(task);
  }
}
