import { formatDate } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Data } from 'src/app/Models/data';
import { CommonService } from 'src/app/services/common.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {
  dataform: any;
  Countrylist: any = [];
  datalist: any[] = [];
  Statelist: any = [];
  Citylist: any = [];
  submitted: boolean;
  isLoading: boolean = false;
  isLoading1: boolean = false;
  data: Data = new Data();
  isUpdate: boolean = false;
  // data:any

  Country: any = [
    { id: 1, name: 'INDIA' },
    { id: 2, name: 'CANADA' },
    { id: 3, name: 'USA' }
  ]
  State: any = [
    { id: 1, name: 'MAHARASHTRA', country_id: 1 },
    { id: 1, name: 'GUJARAT', country_id: 1 },
    { id: 3, name: 'ALBERTA', country_id: 2 },
    { id: 4, name: 'TEXAS', country_id: 3 }
  ]
  City: any = [
    { id: 1, name: 'MUMBAI', state_id: 1 },
    { id: 1, name: 'PUNE', state_id: 1 },
    { id: 2, name: 'KOTA', state_id: 2 },
    { id: 3, name: 'NEW-YORK', state_id: 3 },
    { id: 3, name: 'AUSTIN', state_id: 4 }
  ]

  // isLoading: boolean;
  // isLoading1: boolean;


  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _dataService: DataService,
    private _commonService: CommonService) { }

  ngOnInit() {
    this.dataform = this._formBuilder.group({
      ID: [0],
      FIRST_NAME: ['', Validators.required],
      LAST_NAME: ['', Validators.required],
      DOB: ['', Validators.required],
      COUNTRY: ['', Validators.required],
      STATE: ['', Validators.required],
      CITY: ['', Validators.required],
      MOBI: ['', Validators.required],
      EMAIL: ['', Validators.required],
      OPERATION: ['']
    });
    this.GetFormList();
  }

  get f() {
    return this.dataform.controls
  }

  getState($event: any) {
    
    console.log(this.dataform)
    this.Statelist = this.State.filter(t => t.country_id == $event.target.value);
  }

  getCity($event: any) {
    this.Citylist = this.City.filter(t => t.state_id == $event.target.value)
  }

  addForm() {
    
    this.submitted = true;
    var data1 = new Data();
    data1.OPERATION = 'INSERT_FORM'
    data1.ID = 0,
      data1.FIRST_NAME = this.dataform?.controls['FIRST_NAME']?.value,
      data1.LAST_NAME = this.dataform?.controls['LAST_NAME']?.value,
      data1.DOB = this.dataform?.controls['DOB']?.value,
      data1.COUNTRY = this.dataform?.controls['COUNTRY']?.value,
      data1.STATE = this.dataform?.controls['STATE']?.value,
      data1.CITY = this.dataform?.controls['CITY']?.value,
      data1.EMAIL = this.dataform?.controls['EMAIL']?.value,
      data1.MOBI = this.dataform?.controls['MOBI']?.value
    console.log(JSON.stringify(data1), 'a')
    this._dataService.addForm(data1)
      .subscribe((res: any) => {
        // if (res.Responsecode == 200) {
        //   this.data = res.Data 
        // }
        this.GetFormList();
        alert('Success')
      })
  }


  GetFormList() {
    this._commonService.destroyDT();

    var data = new Data();
    data.OPERATION = 'GET_FORM'
    this._dataService
      .GetFormList(data)
      .subscribe((res: any) => {
        this.datalist = res;
        console.log(this.datalist)
        this._commonService.getDT();

      });


  }

  // GetFormDetails(id: number) {
  //   
  //   this.isUpdate = true;

  //   this._dataService.GetFormDetails(id)
  //   .subscribe((res: any) => {   
  //    this.dataform.patchValue(res.dataform);
  //    this.dataform.get('FIRST_NAME').setValue(this.datalist[id].firsT_NAME)
  //    this.dataform.get('LAST_NAME').setValue(this.datalist[id].lasT_NAME)
  //    this.dataform.get('DOB').setValue(this.datalist[id].dob)
  //    this.dataform.get('COUNTRY').setValue(this.datalist[id].country)
  //    this.dataform.get('STATE').setValue(this.datalist[id].state)
  //    this.dataform.get('CITY').setValue(this.datalist[id].city)
  //    this.dataform.get('EMAIL').setValue(this.datalist[id].email)
  //    this.dataform.get('MOBI').setValue(this.datalist[id].mobi)
  //    this.Statelist = this.State.filter(t => t.country_id == this.datalist[id].country);
  //    this.Citylist = this.City.filter(t => t.state_id == this.datalist[id].city)  
  //   })

  // }

  GetFormDetails(id: number) {
    
    this.isUpdate = true;
    this._dataService.GetFormDetails(id)
      .subscribe((res: any) => {
        
        this.dataform.patchValue(res.dataform)
        this.dataform.get('FIRST_NAME').setValue(this.datalist[id].firsT_NAME)
        this.dataform.get('LAST_NAME').setValue(this.datalist[id].lasT_NAME)
        this.dataform.get('DOB').setValue(this.datalist[id].dob)
        this.dataform.get('COUNTRY').setValue(this.datalist[id].country)
        this.dataform.get('STATE').setValue(this.datalist[id].state)
        this.dataform.get('CITY').setValue(this.datalist[id].city)
        this.dataform.get('EMAIL').setValue(this.datalist[id].email)
        this.dataform.get('MOBI').setValue(this.datalist[id].mobi)
        this.dataform.get('ID').setValue(this.datalist[id].id)
        this.Statelist = this.State.filter(t => t.country_id == this.datalist[id].country);
        this.Citylist = this.City.filter(t => t.state_id == this.datalist[id].city)
      })

  }
  updateForm() {
    
    this.submitted = true;
    if (this.dataform.invalid) {
      return;
    }

    var data = new Data();
    data.OPERATION = 'UPDATE_FORM'
    data.ID = this.dataform?.controls['ID']?.value,
      data.FIRST_NAME = this.dataform?.controls['FIRST_NAME']?.value,
      data.LAST_NAME = this.dataform?.controls['LAST_NAME']?.value,
      data.DOB = this.dataform?.controls['DOB']?.value,
      data.COUNTRY = this.dataform?.controls['COUNTRY']?.value,
      data.STATE = this.dataform?.controls['STATE']?.value,
      data.CITY = this.dataform?.controls['CITY']?.value,
      data.EMAIL = this.dataform?.controls['EMAIL']?.value,
      data.MOBI = this.dataform?.controls['MOBI']?.value
    this._dataService.UpdateForm(JSON.stringify(data))
      .subscribe((res: any) => {
        this.GetFormList();
      })
    alert("successfully updated")
  }

  DeleteForm(id: number) {
    
    this._dataService.DeleteForm(id).subscribe((res: any) => {
      this.GetFormList();
      alert("Deleted")
    })
  }

  Reset() {
    this.dataform.reset();
    this.isUpdate = false
  }
}
