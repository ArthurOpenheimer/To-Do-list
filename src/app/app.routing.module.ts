import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';

import { TodoListComponent } from "./todo-list/todo-list.component";
import { NewTodoComponent } from './new-todo/new-todo.component';

export const routes: Routes = [
  {path: '', redirectTo: 'new-todo', pathMatch: 'full'},
  {path: 'todo-list', component: TodoListComponent},
  {path: 'new-todo', component: NewTodoComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
