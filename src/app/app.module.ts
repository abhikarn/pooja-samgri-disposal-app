import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
// import { AngularFireModule } from 'angularfire2'
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http'
import { IonicStorageModule } from '@ionic/storage'
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PoojasDisposalApiProvider } from '../providers/poojas-disposal-api/poojas-disposal-api';
import { FIREBASE_CONFIG } from './firebase.credentials';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { Camera } from '../../node_modules/@ionic-native/camera';
// import { FcmProvider } from '../providers/fcm/fcm';
import { Firebase } from '@ionic-native/firebase';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
// import { AngularFireAuth } from 'angularfire2/auth';
import { AuthserviceProvider } from '../providers/authservice/authservice';
import { Geolocation } from '@ionic-native/geolocation';
import { GlobalProvider } from '../providers/global/global';
import { LaunchNavigator } from '@ionic-native/launch-navigator';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    PoojasDisposalApiProvider,
    Camera,
    // FcmProvider,
    Firebase,
    AuthserviceProvider,
    Geolocation,
    GlobalProvider,
    LaunchNavigator
  ]
})
export class AppModule { }
