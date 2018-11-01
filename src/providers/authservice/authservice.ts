import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { User } from '../../models/user';
import 'rxjs/add/operator/map';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { FirebaseAuth } from 'angularfire2';
import { AngularFirestore } from '@angular/fire/firestore';

/*
  Generated class for the AuthserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthserviceProvider {

  currentUser: User;
  constructor(private http: Http, private firebase: AngularFireAuth
    , private afs: AngularFirestore) {
    console.log('Hello AuthserviceProvider Provider');
  }

  public login(credentials) {
    // if (credentials.email === null || credentials.password === null) {   //This is using observable
    //   return Observable.throw("Please insert credentials");
    // } else {
    //   return Observable.create(observer => {
    //     // At this point make a request to your backend to make a real check!
    //     let access = (credentials.password === "pass" && credentials.email === "email");
    //     this.currentUser = { name: 'sumit', email: 'sumitroyrnc@gmail.com' }; //new User('Simon', 'saimon@devdactic.com');
    //     observer.next(access);
    //     observer.complete();
    //   });
    // }
    const credential = firebase.auth.EmailAuthProvider.credential(credentials.email, credentials.password);
    // console.log(this.firebase.auth.signInWithEmailAndPassword(credentials.email, credentials.password));
    return this.firebase.auth.signInWithEmailAndPassword(credentials.email, credentials.password);
  }

  // public register(credentials) {
  //   // if (credentials.email === null || credentials.password === null) {
  //   //   return Observable.throw("Please insert credentials");
  //   // } else {
  //   //   // At this point store the credentials to your backend!
  //   //   return Observable.create(observer => {
  //   //     observer.next(true);
  //   //     observer.complete();
  //   //   });
  //   //   // return firebase.auth().createUserWithEmailAndPassword(credentials.email, credentials.password).then(res => {
  //   //   //   console.log(res);
  //   //   // })
  //   // }
  //   return this.firebase.auth.createUserWithEmailAndPassword(credentials.email, credentials.password);
  // }

  async register(credentials) {
    const data = await this.firebase.auth.createUserWithEmailAndPassword(credentials.email, credentials.password);
    return this.afs.doc(`users/${data.user.uid}`).set({ email: credentials.email, display_name: credentials.email });
  }

  public getUserInfo(): User {
    return this.currentUser;
  }

  public logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }

}
