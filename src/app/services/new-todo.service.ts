import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Todo } from '../models/todo.model'

@Injectable({
  providedIn: 'root'
})
export class NewTodoService {

  private todoslist: Todo[];
  private url = 'http://localhost:8000/'

  constructor(private httpClient: HttpClient){
    this.todoslist = [];
  }

  get todos(){
    return this.todoslist;
  }

  get_todo(id: number): Observable<Todo[]>{
    return this.httpClient.get<Todo[]>(`${this.url}users/${id}/todos`);
  }

  saveTodo(todo: Todo): Observable<Todo[]>{
    return this.httpClient.post<Todo[]>(`${this.url}/todos/`, todo);
  }

  delete(id: number){
    return this.httpClient.delete(`${this.url}/todos/${id}`);
  }
}
