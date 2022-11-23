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
  public diasIdade = 0;
  public dIdade = 0;
  public pontosResMas;
  public pontosResFem;
  public pRestante = 0;
  public pM = 0;
  public pF = 0;
  public tContrib = 0;
  public diasContrib = 0;
  public idadeResFem = 0;
  public tComp;
  public tIdade;
  public tPontos;
  public fContrib;
  public sContrib;
  public sIdade;
  public sPontos;
  public aIdade;
  public aContrib;



  constructor(private router: Router) { }

  ngOnInit(): void { }

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
        'diasIdade': this.diasIdade,
        'dIdade': this.dIdade,
        'pRestante': this.pRestante,
        'tContrib': this.tContrib,
        'tComp': this.tComp,
        'tIdade': this.tIdade,
        'tPontos': this.tPontos,
        'fContrib': this.fContrib,
        'sContrib': this.sContrib,
        'sIdade': this.sIdade,
        'sPontos': this.sPontos, 
        'aIdade': this.aIdade,
        'aContrib': this.aContrib,

      }
    };

    this.router.navigate(['/resultado'], navigationExtras);
  }

  calcular() {
    // Declaração de Variáveis e Conversões de Datas em Dias corridos:

    const today = new Date();
    const birthDate = new Date(this.aniversario);
    const diffInMs = today.getTime() - birthDate.getTime();
    this.diasIdade = diffInMs / (24 * 3600 * 1000);
    console.log('Você tem ', +(this.diasIdade / 365).toFixed(0), 'anos de Idade!');
    this.dIdade = +(this.diasIdade / 365).toFixed(0);

    const dtIngresso = new Date(this.ingresso);
    const difEmMs = today.getTime() - dtIngresso.getTime();
    this.diasContrib = difEmMs / (24 * 3600 * 1000);
    this.tContrib = +(this.diasContrib / 365).toFixed(0);
    console.log(
      'Você tem ',
      +(this.diasContrib / 365).toFixed(0),
      'anos de Contribuição!'
    );

    let contribResFem = 0;
    let contribResMas = 0;
    this.idadeResFem = 0;
    let idadeResMas = 0;

    const contribFem = 9125;
    const contribMas = 10950;
    const idadeFem = 18980;
    const idadeMas = 20805;
    const pontosFem = 84;
    const pontosMasc = 94;





    // Cálculos para Sexo Masculino:

    if (this.sexo === 'masculino') {
      contribResMas = contribMas - this.diasContrib - this.tempoCont;
      idadeResMas = idadeMas - this.diasIdade;

      this.pontos = +(((this.diasIdade + this.diasContrib) / 365).toFixed(2));
      console.log('Você tem ', this.pontos, 'Pontos!');

      if (this.pontos >= pontosMasc) {
        this.tPontos = 'Já pode se aposentar por Pontos!!';
        console.log('Já pode se aposentar por Pontos!');
      } else {

        this.pontosResMas = +((pontosMasc - this.pontos).toFixed(2));
        this.pM = this.pontosResMas
        if (this.pontos > 0) {
          this.sPontos = "Não atende a pontuação mínima";
        }


        console.log('Faltam', this.pontosResMas, 'pontos para se aposentar!');
      }

      if (this.sexo === 'masculino') {
        this.pRestante = this.pM;
        console.log(this.pM)
      };

      if (contribResMas <= 0) {
        this.tComp = 'Você já cumpriu o tempo de contribuição!';
        console.log('Você já cumpriu o tempo de contribuição!');
      } else {
        this.converter(contribResMas);
        this.fContrib = "Faltam" +" "+this.anos + " ano(s) e " + this.meses + ' mês(es)';
        if (contribResMas > 0) {
          this.sContrib = "Não atende ao requisito de tempo de contribuição";
        }
        console.log(
          'Faltam ',
          this.anos,
          'Anos e ',
          this.meses,
          'meses de contribuição!'
        );
      }

      if (idadeResMas <= 0) {
        this.tIdade = 'Você já tem idade para se aposentar!';
        console.log('Você já tem idade para se aposentar!');
      } else {
        this.converter(idadeResMas);
        if (idadeResMas > 0) {
          this.sIdade = "Não atende ao requisito de idade mínima";
        }
        console.log(
          'Faltam ',
          this.anos,
          'Anos e ',
          this.meses,
          'Meses de idade!'
        );
      }

      this.resultado();

      // Fim Sexo Masculino

      // Cálculos para Sexo Feminino:
    } else {
      contribResFem = contribFem - this.diasContrib - this.tempoCont;
      this.idadeResFem = idadeFem - this.diasIdade;

      this.pontos = +(((this.diasIdade + this.diasContrib) / 365).toFixed(2));
      console.log('Você tem ', this.pontos, 'Pontos!');

      if (this.pontos >= pontosFem) {
        this.tPontos = 'Já pode se aposentar por Pontos!!';

        console.log('Já pode se aposentar por Pontos!');
      } else {

        this.pontosResFem = +((pontosFem - this.pontos).toFixed(2));
        this.pF = this.pontosResFem
        if (this.pontos > 0) {
          this.sPontos = "Não atende a pontuação mínima";
        }

        console.log('Faltam', this.pontosResFem, 'pontos para se aposentar!');
      }

      if (this.sexo === 'feminino') {
        this.pRestante = this.pF;
        console.log(this.pF)
      };

      if (contribResFem <= 0) {
        this.tComp = 'Você já cumpriu o tempo de contribuição!';
        this.aContrib = 'Não Consta Pendência';
        console.log('Você já cumpriu o tempo de contribuição!');
        

      } else {
        this.converter(contribResFem);
        this.fContrib = "Faltam "+ +this.anos + " ano(s) e " + this.meses + ' mês(es)';
        if (contribResFem > 0) {
          this.sContrib = "Não atende ao requisito de tempo de contribuição";
        }
        console.log(
          'Faltam ',
          this.anos,
          'Anos e ',
          this.meses,
          'meses de contribuição!'
        );
      }

      if (this.idadeResFem <= 0) {
        this.tIdade = 'Você já tem idade para se aposentar!';
        console.log('Você já tem idade para se aposentar!');
      } else {
        this.converter(this.idadeResFem);
        if (this.idadeResFem > 0) {
          this.sIdade = "Não atende ao requisito de idade mínima";
        }
        console.log(
          'Faltam ',
          this.anos,
          'Anos e ',
          this.meses,
          'Meses de idade!'
        );
      }

      if (this.aniversario == null) {
        alert('Favor, informar a data de aniversário');
        return false;

      }

      if (this.anos == null) {
        alert('Favor, informar os Anos');
        return false;

      }

      if (this.ingresso <= this.aniversario) {
        alert('A data de ingresso é menor que a data de nascimento, verifique os dados para continuar.!');
        return false;

      }

      this.resultado();
    }
    // Fim Sexo Feminino.

    // definição de variavel


  }

  // Função que converte dias corridos em Anos, Meses e Dias:

  converter(valor) {
    this.anos = Math.floor(valor / 365);
    this.meses = +((valor % 365) / 30).toFixed(0);
    this.dias = +((valor % 365) % 30).toFixed(0);

    return this.anos, this.meses, this.dias;
  }


}
