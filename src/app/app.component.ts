import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

<<<<<<< HEAD
import { FcmProvider } from '../providers/fcm/fcm';
import { ToastController } from 'ionic-angular';
=======
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { CreateRequestPage } from '../pages/create-request/create-request';
import { FcmProvider } from '../providers/fcm/fcm';
import { ToastController } from 'ionic-angular';
import { tap } from 'rxjs/operators';
>>>>>>> 532091cce91e9ba2e1cb95aa0f0d131ac1712812

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

<<<<<<< HEAD
  rootPage: any = 'LoginPage';
=======
  rootPage: any = HomePage;
>>>>>>> 532091cce91e9ba2e1cb95aa0f0d131ac1712812

  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public fcm: FcmProvider,
    public toastCtrl: ToastController) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
<<<<<<< HEAD
      { title: 'Home', component: 'HomePage' },
      { title: 'Create Request', component: 'CreateRequestPage' }
=======
      { title: 'Home', component: HomePage },
      { title: 'Create Request', component: CreateRequestPage }
>>>>>>> 532091cce91e9ba2e1cb95aa0f0d131ac1712812
    ];

  }

  initializeApp() {
<<<<<<< HEAD
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
=======
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      // Get a FCM token
      this.fcm.getToken()

      // Listen to incoming messages
      this.fcm.listenToNotifications().pipe(
        tap(msg => {
          // show a toast
          const toast = this.toastCtrl.create({
            message: msg.body,
            duration: 3000
          });
          toast.present();
        })
      )
        .subscribe()
    });
>>>>>>> 532091cce91e9ba2e1cb95aa0f0d131ac1712812
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    // this.nav.setRoot(page.component); //TO set as root page
    this.nav.push(page.component);
  }
}
