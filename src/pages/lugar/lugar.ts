import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { LugaresService } from '../../services/lugares.service';


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

  lugar: any = {};

  categorias: any = {
    AireLibre: 'Aire Libre',
    LugarCerrado: 'Lugar Cerrado'
  }

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public lugaresService: LugaresService) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LugarPage');
    this.lugar = this.navParams.get('lugar');
  }

  saveLugar() {
    if (!this.lugar.id) {
      this.lugar.id = Date.now();
      this.lugaresService.createLugar(this.lugar);
    } else {
      this.lugaresService.editLugar(this.lugar);
    }
    console.log(this.lugar);
    this.navCtrl.pop();
  }

}
