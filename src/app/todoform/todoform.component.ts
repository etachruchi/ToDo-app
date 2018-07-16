import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-todoform',
  templateUrl: './todoform.component.html',
  styleUrls: ['./todoform.component.css']
})
export class TodoformComponent implements OnInit {
todoform= new FormGroup({
  name:new FormControl()
});
  constructor() { }

  ngOnInit() {
  }

}
