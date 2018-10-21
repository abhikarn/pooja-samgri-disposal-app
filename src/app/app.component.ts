import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { FcmProvider } from '../providers/fcm/fcm';
import { ToastController } from 'ionic-angular';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = 'LoginPage';

  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public fcm: FcmProvider,
    public toastCtrl: ToastController) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: 'HomePage' },
      { title: 'Create Request', component: 'CreateRequestPage' }
    ];

  }

  initializeApp() {
    // this.platform.ready().then(() => {
    //   // Okay, so the platform is ready and our plugins are available.
    //   // Here you can do any higher level native things you might need.
    //   this.statusBar.styleDefault();
    //   this.splashScreen.hide();

    //   // Get a FCM token
    //   this.fcm.getToken()

    //   // Listen to incoming messages
    //   this.fcm.listenToNotifications().pipe(
    //     tap(msg => {
    //       // show a toast
    //       const toast = this.toastCtrl.create({
    //         message: msg.body,
    //         duration: 3000
    //       });
    //       toast.present();
    //     })
    //   )
    //     .subscribe()
    // });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    // this.nav.setRoot(page.component); //TO set as root page
    this.nav.push(page.component);
  }
}
