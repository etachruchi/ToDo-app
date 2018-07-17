import { Component, OnInit } from "@angular/core";
 import { FormsModule } from "@angular/forms";
import { fromService } from "../../services/form.service";
@Component({
  selector: "app-todoform",
  templateUrl: "./todoform.component.html",
  styleUrls: ["./todoform.component.css"]
})
export class TodoformComponent implements OnInit {

  constructor(
    private formService: fromService
  ) {}

  ngOnInit() {
  }
  onSubmit(fromData) {
     this.formService.saveTodo(fromData.value);
     fromData.form.reset();
   
  }
}
