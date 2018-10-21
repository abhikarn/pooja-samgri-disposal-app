import { Component } from '@angular/core';
<<<<<<< HEAD
import { NavController, IonicPage } from 'ionic-angular';
import { PoojaDisposal } from '../../models/poojadisposal.model';
import { PoojasDisposalApiProvider } from '../../providers/poojas-disposal-api/poojas-disposal-api';
import { AuthserviceProvider } from '../../providers/authservice/authservice';

@IonicPage()
=======
import { NavController } from 'ionic-angular';
import { PoojaDisposal } from '../../models/poojadisposal.model';
import { PoojasDisposalApiProvider } from '../../providers/poojas-disposal-api/poojas-disposal-api';

>>>>>>> 532091cce91e9ba2e1cb95aa0f0d131ac1712812
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
<<<<<<< HEAD

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
=======
  disposalList: PoojaDisposal[];
  constructor(public navCtrl: NavController,
    public poojaapi: PoojasDisposalApiProvider) {
>>>>>>> 532091cce91e9ba2e1cb95aa0f0d131ac1712812
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

<<<<<<< HEAD
  public logout() {
    this.auth.logout().subscribe(succ => {
      this.nav.setRoot('LoginPage')
    });
  }

=======
>>>>>>> 532091cce91e9ba2e1cb95aa0f0d131ac1712812
}
