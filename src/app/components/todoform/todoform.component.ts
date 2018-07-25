import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { fromService } from "../../services/form.service";
import { Router } from "@angular/router";
import { TodolistComponent } from "../todolist/todolist.component";
@Component({
  selector: "app-todoform",
  templateUrl: "./todoform.component.html",
  styleUrls: ["./todoform.component.css"]
  
})
export class TodoformComponent implements OnInit {

  constructor(
    private formService: fromService,
    private router:Router
  ) {}

  ngOnInit() {
  }
  onSubmit(fromData) {
     this.formService.saveTodo(fromData.value);
     fromData.form.reset();
    this.router.navigate(['/todolist']);

  }

}
