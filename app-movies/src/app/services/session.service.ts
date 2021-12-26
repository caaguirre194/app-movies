import { Injectable } from '@angular/core';
import { User } from '@model/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  constructor() {}

  public getUser(email: string, password: string): Observable<User> {
    return null;
  }
}
