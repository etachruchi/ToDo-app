import { Injectable } from "@angular/core";
@Injectable({
  providedIn: "root"
})
export class fromService {
  count = 1;
  todos = [];
  currentdate = new Date();
  task;
  constructor() {}

  saveTodo(todo) {
    todo["id"] = this.count;
    todo["status"] = false;
    this.todos.push(todo);
    ++this.count;
    this.setList();
  }

  getTodos() {
    if (JSON.parse(localStorage.getItem("list"))) {
    this.todos = JSON.parse(localStorage.getItem("list"));
     }
     return this.todos;
  }
  editTodos(todo) {
    for (let i = 0; i < this.todos.length; i++) {
      if (this.todos[i].id == todo["id"]) {
        this.todos[i] = todo;
      }
    }
    this.setList();
  }
  deleteTodos(task) {
    this.todos.splice(this.todos.indexOf(task), 1);
    if (this.todos.length) {
      this.setList();
    } else {
      localStorage.clear();
    }
  }
  currentDate() {
    const year = this.currentdate.getFullYear();
    const month =
      this.currentdate.getMonth() < 10
        ? "0" + (this.currentdate.getMonth() + 1)
        : this.currentdate.getMonth() + 1;
    const day =
      this.currentdate.getDate() < 10
        ? "0" + this.currentdate.getDate()
        : this.currentdate.getDate();
    return year + "-" + month + "-" + day;
  }

  setList() {
    localStorage.setItem("list", JSON.stringify(this.todos));
  }
  updateTodos(list) {
    this.todos = list;
    this.setList();
  }
}
