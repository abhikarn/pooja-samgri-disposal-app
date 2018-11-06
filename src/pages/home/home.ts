import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { PoojaDisposal } from '../../models/poojadisposal.model';
import { PoojasDisposalApiProvider } from '../../providers/poojas-disposal-api/poojas-disposal-api';
import { AuthserviceProvider } from '../../providers/authservice/authservice';
import { Storage } from '@ionic/storage';
import { GlobalProvider } from '../../providers/global/global';

declare var google: any;
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  disposalList: PoojaDisposal[];
  username = '';
  email = '';
  // @ViewChild('map') mapElement: ElementRef;
  // map: any;
  constructor(private navCtrl: NavController
    , private poojaapi: PoojasDisposalApiProvider
    , private nav: NavController
    , private global: GlobalProvider
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
      console.log(value);
    });
    // this.initMap();
  }

  // initMap() {
  //   let latLng = new google.maps.latLng("54.5267", "9.9167");
  //   let mapOptions = {
  //     center: latLng,
  //     zoom: 5,
  //     mapTypeId: google.maps.mapTypeId.ROADMAP
  //   }
  //   this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  // }

  public goToCreate($event, item: PoojaDisposal) {
    console.log(item);
    this.nav.push('CreateRequestPage', item)
  }

  public logout() {
    this.auth.logout().subscribe(succ => {
      this.nav.setRoot('LoginPage')
    });
  }

}
