import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginModel } from 'src/app/Models/login';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted: boolean;
  ispreloader: boolean = true;
  loginForm:any;
  formSubmitAttempt:boolean=false;
  login: LoginModel = new LoginModel();
  data:any
  
  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _loginService:LoginService 

     ){ }

  ngOnInit():void{

    
    this.loginForm = this._formBuilder.group({
    USER_NAME: ['',Validators.required],
    PASSWORD:['',Validators.required]
    });
    this.onSubmit();
    this.GetLogin();
  }
  onSubmit() {
    if (this.loginForm.valid) {
      // this.authService.login(this.loginForm.value); 
    }
    this.formSubmitAttempt = true;
  }

  get i(){
    return this.loginForm.controls;
  }

  GetLogin(){
    debugger
    this.submitted=true;
    var login=new LoginModel();
    login.USER_NAME=this.loginForm?.controls['USER_NAME'].value
    login.PASSWORD=this.loginForm?.controls['PASSWORD'].value
    this._loginService.GetLogin(login)
    .subscribe((res:any)=>{
      
      if(res.message == null){
        alert("Invalid Credentials")
      } 
      else{
        alert('login successful')
      }
    })
  }
 
  
}
