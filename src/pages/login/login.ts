import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController, ToastController } from 'ionic-angular';

import { AuthenticationService } from '../../services/authentication.service';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  email;
  password;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public authenticationService: AuthenticationService,
    public viewCtrl: ViewController,
    public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {
    this.getCredentrials();
  }

  loginWithCredentials() {
    this.authenticationService.login(this.email, this.password)
      .then(response => {
        this.loginToast(response.operationType, response.user.email)
        this.viewCtrl.dismiss();
        localStorage.setItem('loginData', JSON.stringify(response));
      })
      .catch(error => console.log(error))
  }

  getCredentrials() {
    const prompt = this.alertCtrl.create({
      title: 'Login',
      message: "Enter an email and a password to follow.",
      inputs: [
        {
          name: 'email',
          placeholder: 'Correo electrónico',
          type: 'email'
        },
        {
          name: 'password',
          placeholder: 'Password',
          type: 'password'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
        }
        },
        {
          text: 'Login',
          handler: data => {
            this.email = data.email;
            this.password = data.password;
            this.loginWithCredentials();
          }
        }
      ]
    });
    prompt.present();
  }

  cancelar() {
    this.viewCtrl.dismiss();
  }

  loginToast(operation, email) {
    const toast = this.toastCtrl.create({
      message: `${operation} with ${email} successfully`,
      duration: 3000,
      position: 'middle'
    });
    toast.present();
  }

}
