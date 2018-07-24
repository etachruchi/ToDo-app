import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from "@angular/core";
import { fromService } from "../../services/form.service";
import { TodolistComponent } from "../todolist/todolist.component";
@Component({
  selector: "app-todostatus",
  templateUrl: "./todostatus.component.html",
  styleUrls: ["./todostatus.component.css"], 
  changeDetection: ChangeDetectionStrategy.Default
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
        console.log(count);
        
        this.taskCompleted = count;
      }
    );
  }

  getTodos(): void {
    this.allTask = this.formService.getTodos();
  }

  ngOnDestroy() {
     this.countSubscription.unsubscribe();
  }
}
