import { Component, OnInit } from "@angular/core";
 import { FormsModule } from "@angular/forms";
import { fromService } from "../../services/form.service";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Location } from "@angular/common";
@Component({
  selector: "app-todoedit",
  templateUrl: "./todoedit.component.html",
  styleUrls: ["./todoedit.component.css"]
})
export class TodoeditComponent implements OnInit {
  selectedTask: any;
  list: any;
  allTask:any;
  editable: boolean;
  constructor(
    private formService: fromService,
    private route: ActivatedRoute,
    private _location: Location
  ) {}

  ngOnInit(): void {
    this.getTodos();
  }
   getTodos(): void {
     if (JSON.parse(localStorage.getItem("list"))) {
       this.allTask = JSON.parse(localStorage.getItem("list"));
     }
    const id = +this.route.snapshot.paramMap.get("id");
    for (let i = 0; i < this.allTask.length; i++) {
      if (id == this.allTask[i]["id"]) {
        this.selectedTask = this.allTask[i];
      }
    }
  }
  editTodos(todo) {
  this.formService.editTodos(this.selectedTask);
  this._location.back();
}
}
