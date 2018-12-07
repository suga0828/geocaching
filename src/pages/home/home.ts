import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

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
    public lugaresService: LugaresService
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

}
