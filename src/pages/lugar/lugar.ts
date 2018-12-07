import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

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
    public lugaresService: LugaresService,
    public toastCtrl: ToastController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LugarPage');
    this.lugar = this.navParams.get('lugar');
  }

  saveLugar() {
    if (!this.lugar.id) {
      this.lugar.id = Date.now();
      this.lugaresService.createLugar(this.lugar)
        .then( () => {
          this.operationToast(this.lugar.nombre, 'created');
        })
        .catch( error => console.log(error));
    } else {
      this.lugaresService.editLugar(this.lugar)
        .then( () => {
          this.operationToast(this.lugar.nombre, 'edited');
        })
        .catch( error => console.log(error));
    }
    console.log(this.lugar);
    this.navCtrl.pop();
  }

  operationToast(name, operation) {
    const toast = this.toastCtrl.create({
      message: `${name} was ${operation} successfully`,
      duration: 2500,
      position: 'top'
    });
    toast.present();
  }

}
