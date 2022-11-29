import { Component, NgModule, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';
import { AvatarService } from '../services/avatar.service';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Storage } from '@ionic/storage-angular';
import { GlobalVarsService } from '../globals';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  profile = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private avatarService: AvatarService,
    private authenticationService: AuthenticationService,
    private router: Router,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private storage: Storage,
    public globals: GlobalVarsService,

  ) { }

  ngOnInit() {
    this.getUserData();
  }



  zooming(value) {
    console.log(value);
     (value > 0) ?  this.globals.fontSize++ : this.globals.fontSize--;
     console.log(this.globals.fontSize);
  }

  async getUserData() {
    await this.storage.create();
    const dataUser = await this.storage.get('user');
    this.profile = JSON.parse(dataUser).user;
    console.log(this.profile);
  }

  calc() {
    this.router.navigate(['/calcprevprofsp']);
  }

  async logout() {
    this.authenticationService.logout();
    this.router.navigateByUrl('/', { replaceUrl: true });
    this.storage.clear();
    console.log();
  }

  async changeImage() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Base64,
      source: CameraSource.Photos,
    });
    console.log(image);

    if (image) {
      const loading = await this.loadingController.create();
      await loading.present();

      const result = await this.avatarService.uploadImage(image);
      loading.dismiss();

      if (!result) {
        const alert = await this.alertController.create({
          header: 'Upload Failed',
          message: 'There was a problem uploading your avatar.',
          buttons: ['OK'],
        });
        await alert.present();
      }
    }

  }

}
