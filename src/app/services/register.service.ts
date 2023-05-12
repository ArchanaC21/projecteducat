import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environment/environment';
import { Register } from '../Models/register';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  BASE_URL=environment.BASE_URL


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json;charset=UTF-8',
    }),
  };
  submitted: boolean;


  constructor(private _http: HttpClient, private router: Router) { }
    

    AddRegister(register:any){
      
    // this.submitted=true;
    return this._http.post<any>(this.BASE_URL + '/api/Login/AddRegister',
    register,
    this.httpOptions)
    }

    GetRegisterList(register:Register){
      
      return this._http.get<any>(this.BASE_URL + '/api/Login/GetRegisterList?OPERATION='+
      register.OPERATION,
      this.httpOptions
    )
    }

    GetRegistrationDetails(ID:Number){
      
      var OPERATION='GET_DETAILS'
      return this._http.get<any>(this.BASE_URL + '/api/Login/GetRegister?ID=' + ID +'&OPERATION='+ OPERATION ,
       this.httpOptions
     
      )
    }

    updateRegister(register:any){
      
      return this._http.post<any>(this.BASE_URL + '/api/Login/UpdateRegister',
      register,
      this.httpOptions)

    }

    DeleteRegister(ID:Number){
      var OPERATION='DELETE'
      return this._http.delete<any>(this.BASE_URL + '/api/Login/DeleteRegister?ID=' + ID + 
      '&OPERATION=' + OPERATION,this.httpOptions)
    }
}
