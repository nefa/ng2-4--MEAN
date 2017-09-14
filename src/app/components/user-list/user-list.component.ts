import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { User } from '../user/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  @Input() users;
  @Output() userDestroyEvent = new EventEmitter;
  @Output() userEditEvent = new EventEmitter;

  constructor() { }

  ngOnInit() {}

  destroy(user: User) {
    this.userDestroyEvent.emit(user);
  }

  edit(user: User) {
    this.userEditEvent.emit(user);
  }
}
