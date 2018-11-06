import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, Loading } from 'ionic-angular';
// import { AuthserviceProvider } from '../../providers/authservice/authservice';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthserviceProvider } from '../../providers/authservice/authservice';
import { adminEmail } from '../../app/admin.email';
import { User } from 'firebase';
import { appUser } from '../../models/user';
import { Storage } from '@ionic/storage';
import { GlobalProvider } from '../../providers/global/global';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loading: Loading;
  registerCredentials = { email: '', password: '' };
  user: appUser = { isAdmin: false };

  constructor(private nav: NavController, private navParams: NavParams,
    private auth: AuthserviceProvider,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private global: GlobalProvider,
    private storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  public createAccount() {
    this.nav.push('RegisterPage');
  }

  public login() {
    this.showLoading()
    // this.auth.login(this.registerCredentials).subscribe(allowed => {    //This is using observable
    //   if (allowed) {
    //     this.nav.setRoot('HomePage');
    //   } else {
    //     this.showError("Access Denied");
    //   }
    // },
    //   error => {
    //     this.showError(error);
    //   });
    // if (!this.registerCredentials) {
    console.log(this.registerCredentials);
    this.auth.login(this.registerCredentials)
      .then((res) => {
        console.log(res.user.email + ' Sumit');

        if (res) {
          this.global.userEmailProvider = res.user.email;
          this.global.userNameProvider = res.user.displayName;
          if (adminEmail === res.user.email) {
            this.global.isAdminProvider = true;
            console.log('Inside if');
          }
          else {
            this.global.isAdminProvider = false;
            console.log('Inside Else');
          }
          console.log('Your age is', this.global.isAdminProvider);

        }

        this.nav.setRoot('HomePage');
      })
      .catch((err) => {
        console.log('sumit: ' + err);
        this.showError('Invalid Email/Password');
      });
    // }
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  showError(text) {
    this.loading.dismiss();

    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present();
  }

  // async login() {
  //   const loading = await this.loadingCtrl.create({
  //     content: 'Please wait...'
  //   });
  //   loading.present();

  //   this.afAuth.auth.signInWithEmailAndPassword(this.registerCredentials.email, this.registerCredentials.password)
  //     .then(data => {
  //       loading.dismiss();
  //       // this.router.navigateByUrl('/inside/tabs/(home:home)');
  //     }, err => {
  //       loading.dismiss().then(() => {
  //         this.showBasicAlert('Error', err.message);
  //       })
  //     });
  // }

  // async showBasicAlert(title, text) {
  //   const alert = await this.alertCtrl.create({
  //     // header: title,
  //     message: text,
  //     buttons: ['OK']
  //   });

  //   await alert.present();
  // }

}
