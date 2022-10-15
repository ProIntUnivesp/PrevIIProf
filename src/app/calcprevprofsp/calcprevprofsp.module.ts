import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalcprevprofspPageRoutingModule } from './calcprevprofsp-routing.module';

import { CalcprevprofspPage } from './calcprevprofsp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalcprevprofspPageRoutingModule
  ],
  declarations: [CalcprevprofspPage]
})
export class CalcprevprofspPageModule {}
