import { NavController } from '@ionic/angular';
// import { AuthenticationService } from './../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';
import { Storage } from '@ionic/storage-angular';
import { resolve } from 'dns';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  credentials: FormGroup;

  constructor(
    private fb: FormBuilder,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private authenticationService: AuthenticationService,
    private router: Router,
    private storage: Storage,
    private navCtrl: NavController,
  ) {}

  get email(){
    return this.credentials.get('email');
  }

  get password(){
    return this.credentials.get('password');
  }


   ngOnInit() {
    this.verifyLogin();
    this.credentials = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  async verifyLogin(){
    await this.storage.create();
    const storage = await this.storage.get('user');

   // console.log(storage);
    if(storage != null){
      this.router.navigateByUrl('/login', {replaceUrl: true});
    }
  }

  ionViewCanEnter() {
    this.storage.get('user')
      .then((resolve) => {
        if (resolve.length > 0) {
          this.navCtrl.navigateRoot('login');
        } else {
          return true;
        }
      })
      .catch((error) => {
        return true;
      })
  }


  async register(){
    const loading = await this.loadingController.create();
    await loading.present();

    const user = await this.authenticationService.register(this.credentials.value);
    await loading.dismiss();

    if (user) {
      this.router.navigateByUrl('/home', {replaceUrl: true});
    } else {
      this.showAlert('Registration failed', 'Please try again!');
    }
  }


  async login(){
    const loading = await this.loadingController.create();
    await loading.present();

    const user = await this.authenticationService.login(this.credentials.value);
    await loading.dismiss();

    if (user) {
      await this.storage.set('user', JSON.stringify(user));
      this.router.navigateByUrl('/home', {replaceUrl: true});
    } else {
      this.showAlert('Login failed', 'Please try again!');
    }
  }

  async showAlert(header, message) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK'],
    });
    await alert.present();
  }
}
