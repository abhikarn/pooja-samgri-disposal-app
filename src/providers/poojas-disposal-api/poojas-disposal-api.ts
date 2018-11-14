import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database'
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/observable';
import { PoojaDisposal } from '../../models/poojadisposal.model';
import { FIREBASE_CONFIG } from '../../app/firebase.credentials';
import firebase from 'firebase';
import { GlobalProvider } from '../global/global';
import { adminEmail } from '../../app/admin.email';


/*
  Generated class for the PoojasDisposalApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()

export class PoojasDisposalApiProvider {

  private poojaDisposalRef = this.db.list<PoojaDisposal>('pooja-disposal');
  public item$: Observable<PoojaDisposal[]>;
  // private baseUrl = 'https://poojas-disposal-app.firebaseio.com/';
  public disposals: any = {};
  disposalList: AngularFireList<any>;
  constructor(private http: Http,
    private global: GlobalProvider,
    private db: AngularFireDatabase) {
  }


  // getDisposalData(): Observable<any[]> {
  //   return this.http.get(`${FIREBASE_CONFIG.databaseURL}/pooja-disposal.json`)
  //     .map(response => {
  //       this.disposals = response.json();
  //       return this.disposals;
  //     }
  //     );
  // }

  getPoojaDisposals() {
    // this.item$ = this.db.list<PoojaDisposal>('/item').valueChanges();
    // return this.item$;
    return this.poojaDisposalRef.snapshotChanges().map(
      changes => {
        return changes.map(
          a => {
            const data = a.payload.val() as PoojaDisposal;
            data.key = a.payload.key;
            return data;
          }).filter(data =>
            this.global.userEmailProvider === adminEmail ? (1 == 1 && data.isComplete === false) :
              data.createdByUser === this.global.userEmailProvider);
      });
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
