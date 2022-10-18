import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-calcprevprofsp',
  templateUrl: './calcprevprofsp.page.html',
  styleUrls: ['./calcprevprofsp.page.scss'],
})
export class CalcprevprofspPage implements OnInit {
  selectedDates = [];

  
  constructor() { }

  showSelectedDates(e) {
    this.selectedDates = e.detail.value;
  }

  ngOnInit() {

  }

  change(event: any){
    console.log(event);
    }

  changetwo(event: any){
    console.log(event);
    }  

  
}
