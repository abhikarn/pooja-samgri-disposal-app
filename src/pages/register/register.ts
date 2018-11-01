import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { AuthserviceProvider } from '../../providers/authservice/authservice';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  createSuccess = false;
  registerCredentials = { email: '', password: '' };

  constructor(private nav: NavController, private navParams: NavParams
    , private auth: AuthserviceProvider
    , private alertCtrl: AlertController
    , private loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  public async register() {
    // this.auth.register(this.registerCredentials).subscribe(success => {
    //   if (success) {
    //     this.createSuccess = true;
    //     this.showPopup("Success", "Account created.");
    //   } else {
    //     this.showPopup("Error", "Problem creating account.");
    //   }
    // },
    //   error => {
    //     this.showPopup("Error", error);
    //   });
    // console.log('inside register');
    // console.log(this.registerCredentials);
    // // if (!this.registerCredentials) {
    //   this.auth.register(this.registerCredentials)
    //     .then((res) => {
    //       console.log(res);
    //       console.log('user has been created');

    //       this.createSuccess = true;
    //       this.showPopup("Success", "Account created.");
    //       this.nav.setRoot('LoginPage');
    //     })
    //     .catch((err) => console.log('error: ' + err));
    // }
    const loading = await this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();

    this.auth.register(this.registerCredentials)
      .then(_ => {
        loading.dismiss();
      }, err => {
        loading.dismiss().then(() => {
          this.showPopup('Error', err);
        })
      });
  }

  showPopup(title, text) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: text,
      buttons: [
        {
          text: 'OK',
          handler: data => {
            if (this.createSuccess) {
              this.nav.popToRoot();
            }
          }
        }
      ]
    });
    alert.present();
  }

}
