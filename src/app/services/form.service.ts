import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class fromService {
  count = 0;
  todos = [];
  constructor() {}

  saveTodo(todo) {
    todo["id"] = this.count;
    this.todos.push(todo);
    console.log(this.todos);
    ++this.count;
  }

  getTodos() {
    return this.todos;
  }
  editTodos(todo) {
    for (let i = 0; i < this.todos.length; i++) {
      if (this.todos[i].id == todo["id"]) {
        this.todos[i] = todo;
      }
    }
  }

  deleteTodos(task) {
    this.todos.splice(this.todos.indexOf(task), 1);
  }
  clearTodos(todo) {
    todo["id"] = this.count;
    this.todos.push(todo);
    console.log(this.todos);
    ++this.count;
  }
}