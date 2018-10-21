import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2'
import { MyApp } from './app.component';
<<<<<<< HEAD
import { HttpModule } from '@angular/http'
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
=======
import { HomePage } from '../pages/home/home';
import { HttpModule } from '@angular/http'
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CreateRequestPage } from '../pages/create-request/create-request';
>>>>>>> 532091cce91e9ba2e1cb95aa0f0d131ac1712812
import { PoojasDisposalApiProvider } from '../providers/poojas-disposal-api/poojas-disposal-api';
import { FIREBASE_CONFIG } from './firebase.credentials';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { Camera } from '../../node_modules/@ionic-native/camera';
import { FcmProvider } from '../providers/fcm/fcm';
import { Firebase } from '@ionic-native/firebase';
import { AngularFirestore } from 'angularfire2/firestore';
<<<<<<< HEAD
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthserviceProvider } from '../providers/authservice/authservice';

@NgModule({
  declarations: [
    MyApp
=======

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CreateRequestPage
>>>>>>> 532091cce91e9ba2e1cb95aa0f0d131ac1712812
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(FIREBASE_CONFIG)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
<<<<<<< HEAD
    MyApp
=======
    MyApp,
    HomePage,
    CreateRequestPage
>>>>>>> 532091cce91e9ba2e1cb95aa0f0d131ac1712812
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    PoojasDisposalApiProvider,
    Camera,
    FcmProvider,
    AngularFirestore,
<<<<<<< HEAD
    AngularFireAuth,
    Firebase,
    AuthserviceProvider
=======
    Firebase
>>>>>>> 532091cce91e9ba2e1cb95aa0f0d131ac1712812
  ]
})
export class AppModule { }
