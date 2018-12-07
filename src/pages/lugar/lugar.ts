import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TerceraPage } from '../tercera/tercera';


/**
 * Generated class for the LugarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lugar',
  templateUrl: 'lugar.html',
})
export class LugarPage {

  nombreLugar: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LugarPage');
    this.nombreLugar = this.navParams.get('nombre');
  }

  navigateBack() {
    this.navCtrl.pop();
  }

  navigateThird(message) {
    this.navCtrl.push(TerceraPage, {mensaje: message});
  }

}
