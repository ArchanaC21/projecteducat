import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() myMsg: string;
  @Input() myMsg2: string;
  @Output() myOutput: EventEmitter<string> = new EventEmitter();
  @Output() myOutput2: EventEmitter<string> = new EventEmitter();
  //outputMessage: string = '';
  name: any
  constructor() { }

  ngOnInit() {

    console.log(this.myMsg)
  }

  sendValues() {
    ;
    console.log(this.name)
    this.myOutput.emit(this.name);

    this.myOutput2.emit(this.name);
  }

}
