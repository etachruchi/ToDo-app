import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';
import { AppRoutingModule } from './app-routing.module';
import { TodoformComponent } from './todoform/todoform.component';
import { TodonavigationComponent } from './todonavigation/todonavigation.component';

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
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }