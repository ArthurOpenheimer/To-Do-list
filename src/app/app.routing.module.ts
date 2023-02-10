import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';

import { TodoListComponent } from "./todo-list/todo-list.component";
import { NewTodoComponent } from './new-todo/new-todo.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'todo-list', component: TodoListComponent},
  {path: 'new-todo', component: NewTodoComponent},
  {path: 'login', component: LoginComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
