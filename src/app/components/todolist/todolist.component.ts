import { Component, OnInit } from '@angular/core';
import { fromService } from "../../services/form.service";
import { currentId } from 'async_hooks';
@Component({
  selector: "app-todolist",
  templateUrl: "./todolist.component.html",
  styleUrls: ["./todolist.component.css"]
})
export class TodolistComponent implements OnInit {
  list: any;
  selectedTask = { name: "", Date: "", status: false };
  editable: boolean;
  currentdate = new Date();
   date: any;
  constructor(private formService: fromService) {
    const year = this.currentdate.getFullYear();
    const month = (this.currentdate.getMonth() < 10) ? "0" + (this.currentdate.getMonth() + 1) : (this.currentdate.getMonth() + 1);
    const day = (this.currentdate.getDate() < 10) ? "0" + this.currentdate.getDate() : this.currentdate.getDate();
    this.date = year + '-' + month + '-' + day;
  }
  ngOnInit() {
    this.getTodos();
  }
  onSelect(task: any): void {
    this.selectedTask = task;
    task.status = !task.status;
    if (task["date"] == this.date) {
    }
    if (task["date"] < this.date) {
    }
    if (task["date"] > this.date) {
    }
  }
  
  canEdit() {
    this.editable = true;
  }
  getTodos() {
    this.list = this.formService.getTodos();
  }
  editTodos(task) {
    this.formService.editTodos(task);
  }
  clearTodos() {
    this.list = this.formService.getTodos();
    this.editable = false;
  }
  deleteTodos(task) {
    alert("Are you sure you want to delete ?");
    this.formService.deleteTodos(task);
  }

}
