import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  BASE_URL = environment.BASE_URL;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json;charset=UTF-8',
    }),
  };

  
  fireauth: any;

  constructor(private _http: HttpClient, private router: Router) { }

  forgotpassword(email:string){
    this.fireauth.sendPasswordResetEmail(email).then(()=>{
    this.router.navigate(['/varify-email'])
    },
    err=>{
      alert('something went wrong');
    })
      }
    }


