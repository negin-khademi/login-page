import { Injectable } from '@angular/core';
import {  Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(private router : Router) {
  }
  private loggedIn: boolean = false;

  public isAuthenticated() {
    return new Promise((resolve,reject) =>{
      setTimeout(() => {
        resolve(this.loggedIn)
      },1000)
    })
  }
  public login() {
    this.loggedIn = true;
  }

  public logout() {
    this.loggedIn = false;
    localStorage.removeItem('access_token');
    this.router.navigate(['/login']);
  }
}
