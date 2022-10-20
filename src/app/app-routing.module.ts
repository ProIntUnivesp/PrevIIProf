import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {
  redirectUnauthorizedTo,
  redirectLoggedInTo,
  canActivate,

} from '@angular/fire/auth-guard';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule) },
      { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule), canActivate:[AuthGuard] },
      { path: 'calcprevprofsp', loadChildren: () => import('./calcprevprofsp/calcprevprofsp.module').then(m => m.CalcprevprofspPageModule) }
    ])
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
