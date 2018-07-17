import { Component, OnInit } from "@angular/core";
import { FormsModule, FormGroup, FormControl } from "@angular/forms";
import { Observable, of } from "rxjs";
import { fromService } from "../../services/form.service";
@Component({
  selector: "app-todoform",
  templateUrl: "./todoform.component.html",
  styleUrls: ["./todoform.component.css"]
})
export class TodoformComponent implements OnInit {
  count=0;
  todoform = new FormGroup({
    name: new FormControl()
    
  });
  constructor(
    private formService: fromService
  ) {}

  ngOnInit() {
  }
  onSubmit(fromData) {
     console.log(fromData.value);
     this.formService.saveTodo(fromData.value);
     fromData.form.reset();
   
  }
}
