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
    const allTask = this.formService.getTodos();
    const id = +this.route.snapshot.paramMap.get("id");
    for (let i = 0; i < allTask.length; i++) {
      if (id == allTask[i]["id"]) {
        this.selectedTask = allTask[i];
      }
    }
  }
  clearTodos(todo) {
   this.formService.getTodos();
  this.editable = false;
  this._location.back();
 }
}
