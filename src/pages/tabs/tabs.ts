import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

import { HomePage } from '../home/home';
import { PerfilPage } from '../perfil/perfil';
import { AboutUsPage } from '../about-us/about-us';
import { LoginPage } from '../login/login';

import { AuthenticationService } from '../../services/authentication.service';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = PerfilPage;
  tab3Root = AboutUsPage;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public authenticationService: AuthenticationService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
    this.login();
  }

  login() {
    let modal = this.modalCtrl.create(LoginPage);
    modal.present();
  }

  logout() {
    this.authenticationService.logout();
  }

}
