import { LoginService } from './../services/login.service';
import { Component } from '@angular/core';
import { User } from '../models/user.model'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private service: LoginService, private router: Router){}
  username: string;
  password: string;
  logged: boolean = false;

  FindUser() {
    const user: User = {username: this.username, password: this.password};
    this.service.FindUser(user).subscribe(users =>{
      this.clear();
      for (let u of users){
        if (u.username === user.username && u.password === user.password){
          this.logged = true;
          localStorage.setItem('user_id', u.id.toString());
          this.go_to_add_todo();
        }
      }
    })
    return user;
  }

  go_to_add_todo(){
    if (this.logged){
      this.router.navigate(['new-todo']);
    }
  }

  clear(){
    this.username = "";
    this.password = "";
  }
}
