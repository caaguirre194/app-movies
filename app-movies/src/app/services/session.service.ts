import { Injectable } from '@angular/core';
import { User } from '@model/user.model';
import { AsyncSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  constructor() {}

  public validateUser(email: string, password: string): boolean {
    if (email === 'test@test.com' && password === '12345678') {
      document.getElementById('msg_error').style.display = 'none';
      return true;
    }
    document.getElementById('msg_error').style.display = 'block';

    return false;
  }
}
