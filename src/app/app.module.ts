import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { AppRoutingModule } from './app-routing.module';
import { TodoformComponent } from './components/todoform/todoform.component';
import { TodonavigationComponent } from "./components/todonavigation/todonavigation.component";
import { TodoeditComponent } from './components/todoedit/todoedit.component';
import { TodostatusComponent } from './components/todostatus/todostatus.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    TodolistComponent,
    TodoformComponent,
    TodonavigationComponent,
    TodoeditComponent,
    TodostatusComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }