import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-varify-email',
  templateUrl: './varify-email.component.html',
  styleUrls: ['./varify-email.component.css']
})
export class VarifyEmailComponent implements OnInit {
email:string=''
  fireauth: any;
  router: any;


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
  

