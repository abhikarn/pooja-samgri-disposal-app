import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/observable';
/*
  Generated class for the PoojasDisposalApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PoojasDisposalApiProvider {

  private baseUrl = 'https://poojas-disposal-app.firebaseio.com/';
  public disposals: any = {};
  constructor(public http: Http) {
    console.log('Hello PoojasDisposalApiProvider Provider');
  }

  getDisposalData(): Observable<any> {
    return this.http.get(`${this.baseUrl}/poojasdisposals.json`)
      .map(response => {
        this.disposals = response.json();
        return this.disposals;
      }
      );
  }


}
