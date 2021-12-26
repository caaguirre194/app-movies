import { Injectable } from '@angular/core';
import { User } from '@model/user.model';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  public saveUser(user: User): void {
    localStorage.setItem('user', JSON.stringify(user));
  }
}
