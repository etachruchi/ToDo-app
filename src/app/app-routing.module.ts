import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TodolistComponent } from "./components/todolist/todolist.component";
import { TodoformComponent } from "./components/todoform/todoform.component";
import { TodoeditComponent } from "./components/todoedit/todoedit.component";
const routes: Routes = [
  { path: "", redirectTo: "/todolist", pathMatch: "full" },
  { path: "todolist", component: TodolistComponent },
  { path: "todoform", component: TodoformComponent },
  { path: "todoedit/:id", component: TodoeditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
