import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginModel } from '../Models/login';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  BASE_URL = environment.BASE_URL;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json;charset=UTF-8',
    }),
  };

  constructor(private _http: HttpClient, private router: Router) { }


  GetLogin(login:LoginModel){
    
    return this._http.get<any>
    (this.BASE_URL+ '/api/Login/AddUser?username='+ 
    login.USER_NAME +
    '&password=' +login.PASSWORD
    )
  }

}
