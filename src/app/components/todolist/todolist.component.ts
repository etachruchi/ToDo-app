import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { fromService } from "../../services/form.service";
import { Location } from "@angular/common";
import { Router } from "@angular/router";
@Component({
  selector: "app-todolist",
  templateUrl: "./todolist.component.html",
  styleUrls: ["./todolist.component.css"]
})
export class TodolistComponent implements OnInit {
  @Output() countEmitter = new EventEmitter();
  list: any;
  task: any;
  selectedTask = { name: "", status: false };
  date: any;
  count = 0;

  constructor(private formService: fromService) {
    this.date = this.formService.currentDate();
  }
  ngOnInit() {
    this.getTodos();
    if (this.list && this.list.length) {
      this.completedCount();
    }
  }
  onSelect(task): void {
    this.selectedTask = task;
    task.status = !task.status;
    this.completedCount();
     this.formService.setList(this.list);
    }

  getTodos() {
    if (JSON.parse(localStorage.getItem("list"))) {
      this.list = JSON.parse(localStorage.getItem("list"));
    } else {
      this.list = null;
    }
    
  }

  editTodos(task) {
    this.formService.editTodos(task);
  }

  deleteTodos(task) {
    alert("Are you sure you want to delete ?");
    this.formService.deleteTodos(task);
    this.getTodos();
    this.completedCount();
  }

  completedCount() {
    if (this.list) {
      this.count = 0;
      this.list.forEach((element, key) => {
        if (element.status == true) {
          this.count++;
        }
      });
      this.countEmitter.emit(this.count);
    } else {
      this.countEmitter.emit(0);
    }
  }
}
