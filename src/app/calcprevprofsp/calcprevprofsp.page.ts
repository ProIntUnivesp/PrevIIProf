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

  constructor(private router: Router) {}

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
    const diffInMs = today.getTime() - birthDate.getTime();
    console.log(diffInMs);
    let diasIdade = diffInMs / (24 * 3600 * 1000);

    console.log(diasIdade);

    const dtIngresso = new Date(this.ingresso);
    const difEmMs = today.getTime() - dtIngresso.getTime();
    let diasContrib = difEmMs / (24 * 3600 * 1000);

    console.log(diasContrib);

    let contribResFem = 0;
    let contribResMas = 0;
    let idadeResFem = 0;
    let idadeResMas = 0;

    const contribFem = 9125;
    const contribMas = 10950;
    const idadeFem = 18615;
    const idadeMas = 20440;

    if (this.sexo === 'masculino') {
      contribResMas = contribMas - diasContrib - this.tempoCont;
      idadeResMas = idadeMas - diasIdade;
      this.converter(contribResMas);
      this.converter(idadeResMas);

      this.resultado();
    } else {
      contribResFem = contribFem - diasContrib - this.tempoCont;
      idadeResFem = idadeFem - diasIdade;
      this.converter(contribResFem);
      this.converter(idadeResFem);

      this.resultado();
    }

    console.log('Tempo Contrib. Rest. Masc. ', contribResMas);
    console.log('Idade Rest. Masc. ', idadeResMas);
    console.log('Tempo Contrib. Rest. Fem. ', contribResFem);
    console.log('Idade Rest. Fem. ', idadeResFem);
    console.log(this.anos, ' Anos', this.meses, ' Meses', this.dias, ' Dias');
  }

  converter(valor) {
    this.anos = valor / 365;
    this.meses = (valor % 365) / 30;
    this.dias = (valor % 365) % 30;

    return this.anos, this.meses, this.dias;
  }
}
