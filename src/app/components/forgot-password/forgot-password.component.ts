import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from 'src/app/Shared/authservice.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit
{
  email:string=''
  fireauth: any;
  router: any;

  constructor(private _auth:AuthserviceService){

  }
  ngOnInit(): void {
  }

  forgotpassword(){
    this._auth.forgotpassword(this.email);
    this.email='';
  }

}
