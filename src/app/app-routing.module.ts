import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodolistComponent } from './components/todolist/todolist.component';
import { TodoformComponent } from "./components/todoform/todoform.component";

const routes: Routes = [
  { path: '', redirectTo: '/todolist', pathMatch: 'full' },
  { path: 'todolist', component: TodolistComponent },
   { path: 'todoform', component: TodoformComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}