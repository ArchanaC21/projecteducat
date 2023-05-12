import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Register } from '../Models/register';
import { RegisterService } from '../services/register.service';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  registrationForm: FormGroup;
  data: any
  isUpdate: boolean = false;
  submitted: boolean = false;
  registrationList: any[] = [];
  update: boolean = false;

  // // new
  // buttonNameToggle = true;
  // buttonName: 'update' | 'Save' = 'update';
  // onMouseUp() {
  //   this.buttonName = this.buttonNameToggle ? 'update' : 'Save';
  // }




  @ViewChild('closeBtn') closeBtn: ElementRef;
  ID: any;


  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _registerService: RegisterService,
    private _commonService:CommonService) { }


  ngOnInit(): void {
    
    this.registrationForm = this._formBuilder.group({
      ID: [''],
      FIRST_NAME: ['', [Validators.required, Validators.minLength(3)]],
      LAST_NAME: ['', [Validators.required, Validators.minLength(3)]],
      DOB: ['', Validators.required],
      EMAIL_ID: ['', Validators.required],
      PHONE_NO: ['', Validators.required],
      OPERATION: ['']
    });
    console.log(this.registrationForm)
    this.GetRegistrationList();
  }

  get i() {
    return this.registrationForm.controls;
  }

  AddRegistration() {

    this.submitted = true;

    if (this.registrationForm.invalid) {
      return;
    }
    var Register1 = new Register();
    Register1.OPERATION = 'INSERT'
    Register1.FIRST_NAME = this.registrationForm?.controls['FIRST_NAME']?.value,
      Register1.LAST_NAME = this.registrationForm?.controls['LAST_NAME']?.value,
      Register1.DOB = this.registrationForm?.controls['DOB']?.value,
      Register1.EMAIL_ID = this.registrationForm?.controls['EMAIL_ID']?.value,
      Register1.PHONE_NO = this.registrationForm?.controls['PHONE_NO']?.value,
      console.log(JSON.stringify(Register1), 'a')
    this._registerService.AddRegister(Register1)
      .subscribe((res: any) => {
        
        this.GetRegistrationList();
        alert('Success')
      })

  }

  GetRegistrationList() {
    
    this._commonService.destroyDT();

    var Register1 = new Register();
    Register1.OPERATION = 'GET'
    // Register1.ID=0,
    // Register1.FIRST_NAME=this.registrationForm?.controls['FIRST_NAME'].value
    // Register1.LAST_NAME=this.registrationForm?.controls['LAST_NAME'].value
    // Register1.DOB=this.registrationForm?.controls['DOB'].value
    // Register1.EMAIL_ID=this.registrationForm?.controls['EMAIL_ID'].value
    // Register1.PHONE_NO=this.registrationForm?.controls['PHONE_NO'].value
    this._registerService.GetRegisterList(Register1)
      .subscribe((res: any) => {
        this.registrationList = res;
        this._commonService.getDT();

      })
      
  }

  GetRegistrationDetails(id: number) {
    
    this.isUpdate = true;
    this._registerService.GetRegistrationDetails(id)
      .subscribe((res: any) => {
        
        this.registrationForm.patchValue(res.registrationForm)
        this.registrationForm.get('FIRST_NAME').setValue(this.registrationList[id].firsT_NAME)
        this.registrationForm.get('LAST_NAME').setValue(this.registrationList[id].lasT_NAME)
        this.registrationForm.get('DOB').setValue(this.registrationList[id].dob)
        this.registrationForm.get('EMAIL_ID').setValue(this.registrationList[id].emaiL_ID)
        this.registrationForm.get('PHONE_NO').setValue(this.registrationList[id].phonE_NO)
        this.registrationForm.get('ID').setValue(this.registrationList[id].id)
      })

  }

  UpdateRegister() {
    
    this.submitted = true;

    if (this.registrationForm.invalid) {
      return;
    }
    var Register1 = new Register();
    Register1.OPERATION = 'UPDATE'
    Register1.ID = this.registrationForm?.controls['ID']?.value,
      Register1.FIRST_NAME = this.registrationForm?.controls['FIRST_NAME']?.value,
      Register1.LAST_NAME = this.registrationForm?.controls['LAST_NAME']?.value,
      Register1.DOB = this.registrationForm?.controls['DOB']?.value,
      Register1.EMAIL_ID = this.registrationForm?.controls['EMAIL_ID']?.value,
      Register1.PHONE_NO = this.registrationForm?.controls['PHONE_NO']?.value,
      console.log(JSON.stringify(Register1), 'a')
    this._registerService.updateRegister(Register1)
      .subscribe((res: any) => {
        // this.registrationList = res.data
        this.GetRegistrationList();
      })
    alert("successfully updated")
  }

  DeleteRegistration(id: number) {
    this._registerService.DeleteRegister(id).subscribe((res: any) => {
      // if(res.Responsecode == 200){
      //   this.registrationList=res.Data;
      // }
      this.GetRegistrationList();
      alert("Deleted SuccessFully")
    })
  }

  Reset() {
    this.registrationForm.reset();
    this.isUpdate = false
  }
}
