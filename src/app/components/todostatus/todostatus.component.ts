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
        console.log(this.taskCompleted);
        if (!this.taskCompleted) {
          this.getTodos();
        }
      }
    );
  }

  getTodos(): void {
   this.allTask= this.formService.getTodos();
  }
  ngOnDestroy() {
    this.countSubscription.unsubscribe();
  }
}
