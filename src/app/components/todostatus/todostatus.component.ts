import { Component, OnInit, OnDestroy } from "@angular/core";
import { fromService } from "../../services/form.service";
import { TodolistComponent } from "../todolist/todolist.component";
@Component({
  selector: "app-todostatus",
  templateUrl: "./todostatus.component.html",
  styleUrls: ["./todostatus.component.css"]
})
export class TodostatusComponent implements OnInit, OnDestroy {
  allTask: any;
  taskCompleted: number = 0;
  countSubscription;
  constructor(
    private formService: fromService,
    private todolistComponent: TodolistComponent
  ) {}

  ngOnInit(): void {
    this.getTodos();
    this.countSubscription = this.todolistComponent.countEmitter.subscribe(
      count => {
        this.taskCompleted = count;
        if(this.taskCompleted==0){
          this.getTodos();
        }
      }
    );
  }

  getTodos(): void {
    if (JSON.parse(localStorage.getItem("list"))) {
      this.allTask = JSON.parse(localStorage.getItem("list"));
    }
    else{
      this.allTask = null;
    }
  }
  ngOnDestroy() {
    this.countSubscription.unsubscribe();
  }
}
