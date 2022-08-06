import { Component, OnInit } from '@angular/core';
import { NewTodoService } from '../services/new-todo.service';
import { Todo } from '../models/todo.model'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos: any[];

  constructor(private service: NewTodoService) { }

  ngOnInit(): void {
    this.service.get_todo().subscribe((todos: Todo[]) => {
      this.todos = todos;
    })
  }

  delete(todo: Todo){
    this.service.delete(todo.id).subscribe(()=>{
      this.service.get_todo().subscribe((todos: Todo[]) => {
        this.todos = todos;
      });
  });
  }

}
