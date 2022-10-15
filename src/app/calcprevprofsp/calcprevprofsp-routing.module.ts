import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalcprevprofspPage } from './calcprevprofsp.page';

const routes: Routes = [
  {
    path: '',
    component: CalcprevprofspPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalcprevprofspPageRoutingModule {}
