import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { PoojaDisposal } from '../../models/poojadisposal.model';
import { PoojasDisposalApiProvider } from '../../providers/poojas-disposal-api/poojas-disposal-api';
import { AuthserviceProvider } from '../../providers/authservice/authservice';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  disposalList: PoojaDisposal[];
  username = '';
  email = '';

  constructor(private navCtrl: NavController
    , private poojaapi: PoojasDisposalApiProvider
    , private nav: NavController
    , private auth: AuthserviceProvider) {

    let info = this.auth.getUserInfo();
    // this.username = info['pass'];
    // this.email = info['email'];
    console.log(info);
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

  public logout() {
    this.auth.logout().subscribe(succ => {
      this.nav.setRoot('LoginPage')
    });
  }

}
