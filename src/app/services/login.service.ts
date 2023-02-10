import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../models/user.model'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url = 'http://localhost:8000/users/'

  constructor(private httpClient: HttpClient) {}

  FindUser(user: User): Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.url}`);
  }
}
