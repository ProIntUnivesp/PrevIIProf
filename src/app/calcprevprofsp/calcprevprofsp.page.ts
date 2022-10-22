import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-calcprevprofsp',
  templateUrl: './calcprevprofsp.page.html',
  styleUrls: ['./calcprevprofsp.page.scss'],
})
export class CalcprevprofspPage implements OnInit {
  selectedDates = [];

  public tempoCont;
  public aniversario;
  public ingresso;
  public sexo;

constructor() { }
 time(e){
    this.tempoCont = e.target.value;
    console.log('tempoCont', this.tempoCont);
 }

 changeGenre(e){
  this.sexo = e.detail.value;
  console.log('sexo', this.sexo);
 }

 birthdayDate(e){
  this.aniversario = e.target.value;
  console.log('aniversario', this.aniversario);
 }

  entryDate(e) {
    this.ingresso = e.detail.value;
    console.log('ingresso', this.ingresso);
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
