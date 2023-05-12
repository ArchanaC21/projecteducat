import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environment/environment';
import { Data } from 'src/app/Models/data';


@Injectable({
  providedIn: 'root'
})
export class DataService {
BASE_URL=environment.BASE_URL


httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json;charset=UTF-8',
  }),
};

submitted: boolean;

constructor(private _http: HttpClient, 
  private router: Router) { }

  addForm(form:any){
    
    this.submitted=true;
    return this._http.post<any>(this.BASE_URL +'/api/Form/AddForm',
    form,
    this.httpOptions)
  } 

  GetFormList(data: Data) {
    
    return this._http.get<any>(this.BASE_URL +'/api/Form/GetFormList?OPERATION='+ 
   
    data.OPERATION,this.httpOptions);
   }

   GetFormDetails(ID:number){
    
    var OPERATION = 'GET_DETAILS'
    return this._http.get<any>(
      this.BASE_URL + '/api/Form/GetDetails?ID=' + ID +'&OPERATION=' + OPERATION, 
      this.httpOptions
    );  
   }

   UpdateForm(form:any){
    
    return this._http.post<any>(this.BASE_URL + '/api/Form/UpdateForm',
    form,
    this.httpOptions)
   }

   DeleteForm(ID:Number){
    
    var OPERATION='DELETE_FORM'
    return this._http.delete<any>(this.BASE_URL + '/api/Form/DeleteForm?ID=' + ID +
    '&OPERATION=' + OPERATION,this.httpOptions)
   }

 
}
