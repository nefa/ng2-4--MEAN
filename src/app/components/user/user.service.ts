import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { User } from './user';

@Injectable()
export class UserService {

  constructor(private _http: Http) {}

  create(user: User) {
    return this._http.post('/users', user)
      .map(data => data.json()).toPromise();
  }

  destroy(user: User) {
    return this._http.delete('/users/' + user._id).map(data => data.json()).toPromise();
  }

  update(user: User) {
    return this._http.put('/users/' + user._id, user).map(data => data.json()).toPromise();
  }

  getAllUsers()/*: Observable<User>*/ {
    return this._http.get('/users').map(data => data.json()).toPromise();
  }

  getUserBy(user: User) {
    return this._http.get('/users/' + user._id).map(data => data.json()).toPromise();
  }
}
