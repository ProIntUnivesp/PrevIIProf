import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { GlobalVarsService } from '../globals';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.page.html',
  styleUrls: ['./resultado.page.scss'],
})
export class ResultadoPage implements OnInit {
  
  data: any;

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    public globals: GlobalVarsService,

    ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params) {
        this.data = params;
      }
    });
  }

  zooming(value) {
    console.log(value);
     (value > 0) ?  this.globals.fontSize++ : this.globals.fontSize--;
     console.log(this.globals.fontSize);
  }

}
