import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
data:any
  input: string = "Parent"
  input2: string = "hello"

  constructor() { }

  ngOnInit() { }

  GetChildData(data) {
    ;
    this.data=data
    console.log(data)
  }

  GetChildData2(data) {
    ;
    this.data=data
    console.log(data)
  }

}
