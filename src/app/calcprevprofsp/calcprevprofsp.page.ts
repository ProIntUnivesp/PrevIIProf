import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-calcprevprofsp',
  templateUrl: './calcprevprofsp.page.html',
  styleUrls: ['./calcprevprofsp.page.scss'],
})
export class CalcprevprofspPage implements OnInit {
  selectedDates = [];

  public tempoCont = 0;
  public aniversario;
  public ingresso;
  public sexo;
  public anos = 0;
  public meses = 0;
  public dias = 0;
  public pontos = 0;
  

  
  constructor(private router: Router) {}

  ngOnInit(): void {
}

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
    let navigationExtras: NavigationExtras = {
      queryParams: {
         'tempo': this.tempoCont,
         'aniver': this.aniversario,
         'ingresso': this.ingresso,
         'sexo': this.sexo,
         'idade': this.anos,
         'meses': this.meses,
         'dias': this.dias,
         'pontos': this.pontos,
         
      }
    };
    
    this.router.navigate(['/resultado'], navigationExtras);
  }

  calcular() {

    // Declaração de Variáveis e Conversões de Datas em Dias corridos:

    const today = new Date();
    const birthDate = new Date(this.aniversario);
    const diffInMs = today.getTime() - birthDate.getTime();
    const diasIdade = diffInMs / (24 * 3600 * 1000);


    const dtIngresso = new Date(this.ingresso);
    const difEmMs = today.getTime() - dtIngresso.getTime();
    const diasContrib = difEmMs / (24 * 3600 * 1000);

    let contribResFem = 0;
    let contribResMas = 0;
    let idadeResFem = 0;
    let idadeResMas = 0;

    const contribFem = 9125;
    const contribMas = 10950;
    const idadeFem = 18615;
    const idadeMas = 20440;
    const pontosFem = 84;
    const pontosMasc = 94;

    // Cálculos para Sexo Masculino:

    if (this.sexo === 'masculino') {

      contribResMas = contribMas - diasContrib - this.tempoCont;
      idadeResMas = idadeMas - diasIdade;

      this.pontos = +(((diasIdade + diasContrib) / 365).toFixed(2));
      console.log('Você tem ',  this.pontos, 'Pontos!');

      if ( this.pontos >= pontosMasc) {

        console.log('Já pode se aposentar por Pontos!');

      } else {

        const pontosResMas = +((pontosMasc -  this.pontos).toFixed(2));

        console.log('Faltam', pontosResMas, 'pontos para se aposentar!');

      }

      if (contribResMas <= 0) {
        console.log('Você já cumpriu o tempo de contribuição!');

      } else {

        this.converter(contribResMas);
        console.log('Faltam ', this.anos, 'Anos e ', this.meses, 'meses de contribuição!');
      }

      if (idadeResMas <= 0) {
        console.log('Você já tem idade para se aposentar!');

      } else {

        this.converter(idadeResMas);
        console.log('Faltam ', this.anos, 'Anos e ', this.meses, 'Meses de idade!');
      }

      this.resultado();

      // Fim Sexo Masculino

    // Cálculos para Sexo Feminino:

    } else {

      contribResFem = contribFem - diasContrib - this.tempoCont;
      idadeResFem = idadeFem - diasIdade;

        this.pontos = +(((diasIdade + diasContrib) / 365).toFixed(2));
      console.log('Você tem ',  this.pontos, 'Pontos!');

      if ( this.pontos >= pontosFem) {

        console.log('Já pode se aposentar por Pontos!');

      } else {

        const pontosResFem = +((pontosFem -  this.pontos).toFixed(2));
        console.log('Faltam', pontosResFem, 'pontos para se aposentar!');

      }

      if (contribResFem <= 0) {
        console.log('Você já cumpriu o tempo de contribuição!');

      } else {

        this.converter(contribResFem);
        console.log('Faltam ', this.anos, 'Anos e ', this.meses, 'meses de contribuição!');
      }

      if (idadeResFem <= 0) {
        console.log('Você já tem idade para se aposentar!');

      } else {

        this.converter(idadeResFem);
        console.log('Faltam ', this.anos, 'Anos e ', this.meses, 'Meses de idade!');
      }

      if(this.aniversario == null){
        alert('Favor, informar a data de aniversário');
        return false;

      }

      if(this.anos == null){
        alert('Favor, informar os Anos');
        return false;

      }

      this.resultado();
    }
    // Fim Sexo Feminino.
}

  // Função que converte dias em Anos, Meses e Dias:

  converter(valor) {
    this.anos = Math.floor(valor / 365);
    this.meses = +(((valor % 365) / 30).toFixed(2));
    this.dias = (valor % 365) % 30;

    return (this.anos, this.meses, this.dias);
  }



}
