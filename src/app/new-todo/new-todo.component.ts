import { Component } from '@angular/core';
import { NewTodoService } from '../services/new-todo.service';
import { Todo } from '../models/todo.model'
import { Router } from '@angular/router'

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.scss']
})
export class NewTodoComponent {

  constructor(private service: NewTodoService, private router: Router){}

  name: string;

  saveTodo() {
    const todo: Todo = {name: this.name};
    this.service.saveTodo(todo).subscribe(todos =>{
      this.clear();
    })
  }

  clear(){
    this.name = "";
  }

}
