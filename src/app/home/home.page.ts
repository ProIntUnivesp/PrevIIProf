import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';
import { AvatarService } from '../services/avatar.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  profile = null;
  
  constructor(

    private avatarService: AvatarService,
    private authenticationService: AuthenticationService,
    private router: Router,
    private loadingController: LoadingController,
    private alertController: AlertController,

  ) {}
async logout() {
  this.authenticationService.logout();
  this.router.navigateByUrl('/', { replaceUrl: true });
} 

async changeImage(){

}

}
