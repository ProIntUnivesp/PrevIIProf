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
<<<<<<< HEAD
      { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule), canActivate:[AuthGuard] },
      { path: 'calcprevprofsp', loadChildren: () => import('./calcprevprofsp/calcprevprofsp.module').then(m => m.CalcprevprofspPageModule) }
=======
      { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
      { path: 'calcprevprofsp', loadChildren: () => import('./calcprevprofsp/calcprevprofsp.module')
      .then(m => m.CalcprevprofspPageModule) },
      { path: 'resultado', loadChildren: () => import('./resultado/resultado.module').
      then(m => m.ResultadoPageModule) }
>>>>>>> f901f25a6ac241f7b2d2431dcc9e9533f0f2b843
    ])
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
