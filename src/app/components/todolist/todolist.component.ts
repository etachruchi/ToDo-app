import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { fromService } from "../../services/form.service";
import { Location } from '@angular/common';
import { Router } from "@angular/router";
@Component({
  selector: "app-todolist",
  templateUrl: "./todolist.component.html",
  styleUrls: ["./todolist.component.css"]
})
export class TodolistComponent implements OnInit {
  @Output()
  countEmitter = new EventEmitter();
  list: any;
  task: any;
  selectedTask = { name: "", status: false };
  editable: boolean;
  date: any;
  count = 0;
  allTask;

  constructor(private formService: fromService) {
      this.date = this.formService.currentDate();
  }
  ngOnInit() {
    this.getTodos();
  }
  onSelect(task): void {
    this.count = 0;
    this.selectedTask = task;
    task.status = !task.status;
    this.list.forEach((element,key) => {
    if (element.status == true) {
    this.count++;
    }
    });
    this.countEmitter.emit(this.count);
  }
  getTodos() {
    this.list = this.formService.getTodos();
    this.allTask = this.formService.getTodos();
  }
  editTodos(task) {
    this.formService.editTodos(task);
  }
  deleteTodos(task) {
    alert("Are you sure you want to delete ?");
    this.formService.deleteTodos(task);
  }
}
