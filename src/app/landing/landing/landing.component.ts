import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})


export class LandingComponent {

  ispreloader: boolean = true;

  constructor(
    private _router: Router ) {}


  ngOnInit(): void {

    this.preloader();
  
  }

preloader(){
  setTimeout(() => {
    this.ispreloader = false;
  }, 3000);

}

}
