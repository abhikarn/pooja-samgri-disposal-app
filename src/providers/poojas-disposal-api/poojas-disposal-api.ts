import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/observable';
import { PoojaDisposal } from '../../models/poojadisposal.model';
import { FIREBASE_CONFIG } from '../../app/firebase.credentials';


/*
  Generated class for the PoojasDisposalApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()

export class PoojasDisposalApiProvider {

  private poojaDisposalRef = this.db.list<PoojaDisposal>('pooja-disposal');
  // private baseUrl = 'https://poojas-disposal-app.firebaseio.com/';
  public disposals: any = {};
  constructor(public http: Http,
    public db: AngularFireDatabase) {
  }


  getDisposalData(): Observable<any[]> {
    return this.http.get(`${FIREBASE_CONFIG.databaseURL}/pooja-disposal.json`)
      .map(response => {
        this.disposals = response.json();
        return this.disposals;
      }
      );
  }

  getPoojaDisposals(): AngularFireList<PoojaDisposal> {
    console.log(this.poojaDisposalRef);
    return this.poojaDisposalRef;
  }

  addDisposal(poojaDisposal: PoojaDisposal) {
    return this.poojaDisposalRef.push(poojaDisposal);
  }

  updateDisposal(poojaDisposal: PoojaDisposal) {
    return this.poojaDisposalRef.update(poojaDisposal.key, poojaDisposal);
  }

  removeDisposal(poojaDisposal: PoojaDisposal) {
    return this.poojaDisposalRef.remove(poojaDisposal.key);
  }


}
