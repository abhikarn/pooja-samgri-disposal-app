import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database'
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
  disposalList: AngularFireList<any>;
  constructor(public http: Http,
    private db: AngularFireDatabase) {
  }


  getDisposalData(): Observable<any[]> {
    return this.http.get(`${FIREBASE_CONFIG.databaseURL}/pooja-disposal.json`)
      .map(response => {
        this.disposals = response.json();
        return this.disposals;
      }
      );
  }

  getPoojaDisposals() {
    return this.poojaDisposalRef.snapshotChanges().map(
      changes => {
        return changes.map(
          a => {
            const data = a.payload.val() as PoojaDisposal;
            data.key = a.payload.key;
            return data;
          });
      });
    // this.disposalList = this.db.list('pooja-disposal');
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
