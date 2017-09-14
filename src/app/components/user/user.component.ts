import { Component, OnInit } from '@angular/core';


import { User } from './user';
import { UserService } from './user.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: Array<User> = [
    new User(1, "First", "Last", "email@email.com"),
    new User(2, "First", "Last", "email@email.com"),
    new User(3, "First", "Last", "email@email.com")
  ];

  constructor(private _userService: UserService) { }

  ngOnInit() {
    // this.getUsers();
  }

  getUsers() {
    this._userService.getAllUsers()
      .then(users => this.users = users);
  }

  create(user: User) {
    this.users.push(user);
  }

  edit(user: User, evt) {
    console.log(user, evt);
    this.users = this.users.map( (u_: User) => (u_._id === user._id) ? Object.assign(u_, user) : u_);
    console.log(this.users);
  }

  destroy(user: User) {
    this.users = this.users.filter( u => u._id !== user._id);
  }

}
