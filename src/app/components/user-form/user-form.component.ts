import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { User } from '../user/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  @Input() user: User;
  @Input() actionType: string; //@TODO refactor to one of ['create', 'edit']
  @Output() userCreateEvent = new EventEmitter;
  @Output() userEditEvent = new EventEmitter;

  constructor() { }

  ngOnInit() {
    this.user = this.user || new User();
  }

  onSubmit() {
    if (this.actionType === 'create') {
      this.userCreateEvent.emit(this.user);
    } else if (this. actionType === 'edit') {
      this.userEditEvent.emit(this.user);
    } else {
      throw Error('incorrect action type' + this.actionType + 'supported only:');
    }
    /*reset user after submit*/
    this.user = new User();
  }

}
