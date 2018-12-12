import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.less']
})
export class NavComponent implements OnInit {

  model: any = {};

  constructor() { }

  ngOnInit() {
  }

  //#region Functions
  login(){
    console.log(this.model);
  }
  //#endregion
}
