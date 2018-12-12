import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.less']
})
export class ValueComponent implements OnInit {

  values: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getValues();
  }

  //#region Functions
  getValues(){
    this.http.get('http://localhost:5000/api/values/1').subscribe(result => {
      this.values = result;
    }, error => {
      console.log(error);
    });
  }
  //#endregion

}
