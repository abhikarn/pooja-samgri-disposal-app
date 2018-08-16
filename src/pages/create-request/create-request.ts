import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, List } from 'ionic-angular';
import { PoojaDisposal } from '../../models/poojadisposal.model';
import { PoojasDisposalApiProvider } from '../../providers/poojas-disposal-api/poojas-disposal-api';
import { HomePage } from '../home/home';

/**
 * Generated class for the CreateRequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-request',
  templateUrl: 'create-request.html',
})
export class CreateRequestPage {

  private disposalModel: PoojaDisposal = { itemName: '', itemDescription: '' };
  private listDisposal: PoojaDisposal[];
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public disposalProvider: PoojasDisposalApiProvider) {
  }

  ionViewDidLoad() {
    // var res = this.disposalProvider.getPoojaDisposals();
    this.disposalProvider.getDisposalData().subscribe(
      data => {
        console.log(data, 'Sumit');
      }
    );
    // var res = this.disposalProvider.getPoojaDisposals().snapshotChanges(['child_added'])
    //   .subscribe(actions => {
    //     actions.forEach(action => {
    //       console.log(action.type);
    //       console.log(action.key);
    //       console.log(action.payload.val());
    //     });
    //   });
  }

  saveRequest() {
    // this.disposalProvider.addDisposal(this.disposalModel);
    console.log(this.disposalModel);
    this.disposalProvider.addDisposal(this.disposalModel).then(ref => {
      this.navCtrl.push(HomePage);
    })
  }

}
