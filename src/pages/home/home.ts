import { Component } from '@angular/core';
import { NavController, AlertController, ToastController } from 'ionic-angular';

import { LugarPage } from '../lugar/lugar';
import { LugaresService } from '../../services/lugares.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  lugares: any = [];

  constructor(
    public navCtrl: NavController,
    public lugaresService: LugaresService,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController
  ) {}

  ionViewDidLoad() {
    this.lugaresService.getLugares()
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
            this.lugaresService.deleteLugar(lugar)
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
