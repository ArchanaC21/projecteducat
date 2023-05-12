import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environment/environment';
import * as jquery from 'jquery';



@Injectable({
  providedIn: 'root'
})
export class CommonService {
  BASE_URL= environment.BASE_URL

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json;charset=UTF-8',
    }),
  };

  constructor(private _http:HttpClient,
   private route:Router ) { }


   destroyDT() {
    $('#data-table-config').DataTable().clear().destroy();
  }
  
   getDT() {
    setTimeout(() => {
      $('#data-table-config').DataTable({
        pagingType: 'full_numbers',
        pageLength: 5,
        processing: true,
        lengthMenu: [5, 10, 25],
      });
    }, 1);
  }


}
