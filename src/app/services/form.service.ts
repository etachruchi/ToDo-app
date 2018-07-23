import { Injectable } from "@angular/core";
@Injectable({
  providedIn: "root"
})
export class fromService {
  count = 0;
  todos = [];
  currentdate = new Date();
  
   constructor() { }

  saveTodo(todo) {
    todo["id"] = this.count;
    this.todos.push(todo);
    ++this.count;
  }

  getTodos() {
    return this.todos ;
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
    ++this.count;
  }
  
  currentDate() {
    const year = this.currentdate.getFullYear();
    const month = this.currentdate.getMonth() < 10 ? "0" + (this.currentdate.getMonth() + 1) : this.currentdate.getMonth() + 1;
    const day = this.currentdate.getDate() < 10 ? "0" + this.currentdate.getDate() : this.currentdate.getDate();
    return (year + '-' + month + '-' + day);
    
  }
}
