import { Component, OnInit } from "@angular/core";
 import { FormsModule } from "@angular/forms";
import { fromService } from "../../services/form.service";
import { ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: "app-todoedit",
  templateUrl: "./todoedit.component.html",
  styleUrls: ["./todoedit.component.css"]
})
export class TodoeditComponent implements OnInit {
  selectedTask: any;
  list: any;
  editable: boolean;
  constructor(
    private formService: fromService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos(): void {
    console.log(this.formService.getTodos());
    const allTask = this.formService.getTodos();
    const id = +this.route.snapshot.paramMap.get("id");
    for (let i = 0; i < allTask.length; i++) {
      if (id == allTask[i]["id"]) {
        this.selectedTask = allTask[i];
      }
    }
  }
  clearTodos(todo) {
    this.list = this.formService.getTodos();
    this.editable = false;
    window.history.back();

  }
}
