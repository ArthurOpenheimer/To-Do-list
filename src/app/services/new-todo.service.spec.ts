/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NewTodoService } from './new-todo.service';

describe('Service: NewTodo', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewTodoService]
    });
  });

  it('should ...', inject([NewTodoService], (service: NewTodoService) => {
    expect(service).toBeTruthy();
  }));
});
