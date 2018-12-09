import { Component } from '@angular/core';
import { NavController, AlertController, ToastController } from 'ionic-angular';

import { LugarPage } from '../lugar/lugar';
import { LugaresProvider } from '../../providers/lugares.provider';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  lugares: any = [];

  constructor(
    public navCtrl: NavController,
    public lugaresProvider: LugaresProvider,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController
  ) {}

  ionViewDidLoad() {
    this.lugaresProvider.getLugares()
      .valueChanges()
        .subscribe( lugares => {
          this.lugares = lugares
        }, error => console.log(error) );
    console.log('Lugares cargados');
  }

  toDetail(lugar) {
    this.navCtrl.push(LugarPage, { lugar: lugar });
  }

  toCreate() {
    this.navCtrl.push(LugarPage, { lugar: {} });
  }

  deleteLugar(lugar) {
    const confirm = this.alertCtrl.create({
      title: `¿Desea eliminar ${lugar.nombre}?`,
      buttons: [
        {
          text: 'Eliminar',
          handler: () => {
            console.log('Eliminar clicked');
            let eliminated = lugar.nombre;
            this.lugaresProvider.deleteLugar(lugar)
              .then( () => {
                this.deleteToast(eliminated);
              })
              .catch( error => console.log(error));
          }
        },
        {
          text: 'Cancelar',
          handler: () => {}
        }
      ]
    });
    confirm.present();
  }

  deleteToast(name) {
    const toast = this.toastCtrl.create({
      message: `${name} was deleted successfully`,
      duration: 1500,
      position: 'bottom'
    });
    toast.present();
  }

}
