import { Component } from '@angular/core';
import { NewTodoService } from './services/new-todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-list';

  constructor(private service: NewTodoService) { }

}
