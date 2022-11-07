import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-calcprevprofsp',
  templateUrl: './calcprevprofsp.page.html',
  styleUrls: ['./calcprevprofsp.page.scss'],
})
export class CalcprevprofspPage {
  selectedDates = [];

  public tempoCont = 0;
  public aniversario;
  public ingresso;
  public sexo;
  public anos = 0;
  public meses = 0;
  public dias = 0;


  constructor(

    private router: Router

  ) {}

  time(e) {
    this.tempoCont = e.target.value;
    console.log('tempoCont', this.tempoCont);
  }

  changeGenre(e) {
    this.sexo = e.detail.value;
    console.log('sexo', this.sexo);
  }

  birthdayDate(e) {
    this.aniversario = e.target.value;
    console.log('aniversario', this.aniversario);
  }

  entryDate(e) {
    this.ingresso = e.detail.value;
    console.log('ingresso', this.ingresso);
  }

  resultado() {

    this.router.navigate(['/resultado']);
  }

  calcular() {

    const today = new Date();
    const birthDate = new Date(this.aniversario);
    let idade = (today.getFullYear() - birthDate.getFullYear()) * 365;
    const m = today.getMonth() - birthDate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      idade--;
    }

    const dtIngresso = new Date(this.ingresso);
    let contrib = (today.getFullYear() - dtIngresso.getFullYear()) * 365;
    const m2 = today.getMonth() - dtIngresso.getMonth();

    if (m2 < 0 || (m2 === 0 && today.getDate() < dtIngresso.getDate())) {
      contrib--;
    }


    let contribResFem = 0;
    let contribResMas = 0;
    let idadeResFem = 0;
    let idadeResMas = 0;

    const contribFem = 9125;
    const contribMas = 10950;
    const idadeFem = 18615;
    const idadeMas = 20440;

    if (this.sexo === 'masculino') {

      contribResMas = (contribMas - contrib) - this.tempoCont;
      idadeResMas = (idadeMas - idade) / 365;
      this.converter(contribResMas);

    } else {

      contribResFem = (contribFem - contrib) - this.tempoCont;
      idadeResFem = (idadeFem - idade) /365;
      this.converter(contribResFem);
    }

    console.log(contribResMas);
    console.log(idadeResMas);
    console.log(contribResFem);
    console.log(idadeResFem);
    console.log(this.anos, this.meses, this.dias);


  }

  converter(valor) {

    this.anos = valor / 365;
    this.meses = (valor % 365) / 30;
    this.dias = (valor % 365) % 30;

    return (this.anos, this.meses, this.dias);

  }

}
