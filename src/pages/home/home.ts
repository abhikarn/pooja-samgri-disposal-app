import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PoojasDisposalApiProvider } from '../../providers/poojas-disposal-api/poojas-disposal-api';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public disposals: any[];
  constructor(public navCtrl: NavController,
    public poojaapi: PoojasDisposalApiProvider) {

  }

  ionViewDidLoad() {

    this.poojaapi.getDisposalData().subscribe(
      x => {
        // this.disposals = x;
        console.log(x);
      }
    );
  }

}
