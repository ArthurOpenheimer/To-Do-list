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
  user_id = this.get_user_id();

  constructor(private service: NewTodoService) { }

  get_user_id(){
    return localStorage.getItem('user_id');
  }

  ngOnInit(): void {
    this.service.get_todo(parseInt(this.user_id)).subscribe((todos: Todo[]) => {
      this.todos = todos;
    })
  }

   delete(todo: Todo){
     this.service.delete(todo.id).subscribe(()=>{
       this.service.get_todo(parseInt(this.user_id)).subscribe((todos: Todo[]) => {
         this.todos = todos;
       });
   });
  }

}
