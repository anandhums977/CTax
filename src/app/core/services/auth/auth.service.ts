// auth.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isAuthenticated = new BehaviorSubject<boolean>(false);

  get isAuthenticated() {
    return this._isAuthenticated.asObservable();
  }

  login() {
    this._isAuthenticated.next(true);
  }

  logout() {
    this._isAuthenticated.next(false);
  }
}

