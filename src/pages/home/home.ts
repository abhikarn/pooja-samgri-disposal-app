import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PoojaDisposal } from '../../models/poojadisposal.model';
import { PoojasDisposalApiProvider } from '../../providers/poojas-disposal-api/poojas-disposal-api';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  disposalList: PoojaDisposal[];
  constructor(public navCtrl: NavController,
    public poojaapi: PoojasDisposalApiProvider) {
  }

  ionViewDidLoad() {

    // var x = this.poojaapi.getPoojaDisposals();
    // x.snapshotChanges().subscribe(item => {
    //   this.disposalList = [];
    //   item.forEach(element => {
    //     var y = element.payload.toJSON();
    //     y['$key'] = element.key;
    //     this.disposalList.push(y as PoojaDisposal);
    //     console.log(this.disposalList);
    //   });
    // });
    this.poojaapi.getPoojaDisposals().subscribe((value) => {
      this.disposalList = value;
    });
  }

}
