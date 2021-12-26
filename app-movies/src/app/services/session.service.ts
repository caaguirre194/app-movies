import { Injectable } from '@angular/core';
import { User } from '@model/user.model';
import { AsyncSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  constructor() {}

  public getUser(email: string, password: string): Observable<User> {
    let project = new AsyncSubject();

    if (email === 'test@test.com' && password === '12345678') {
      document.getElementById('msg_error').style.display = 'none';

      return {} as Observable<User>;
    }
    document.getElementById('msg_error').style.display = 'block';

    return null;
  }

  public validateUser(email: string, password: string): boolean {
    if (email === 'test@test.com' && password === '12345678') {
      return true;
    }
    return false;
  }
}
