import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Todo } from '../models/todo.model'

@Injectable({
  providedIn: 'root'
})
export class NewTodoService {

  private todoslist: Todo[];
  private url = 'http://localhost:3000/todos'

  delete_url: string;
  name: string;

  constructor(private httpClient: HttpClient){
    this.todoslist = [];
  }

  get todos(){
    return this.todoslist;
  }

  get_todo(): Observable<Todo[]>{
    return this.httpClient.get<Todo[]>(this.url);
  }

  saveTodo(todo: Todo): Observable<Todo[]>{
    return this.httpClient.post<Todo[]>(this.url, todo);
  }

  delete(id: number){
    return this.httpClient.delete(this.url+'/'+id);
  }
}
