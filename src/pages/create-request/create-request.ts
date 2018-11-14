import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, normalizeURL, AlertController } from 'ionic-angular';
import { PoojaDisposal } from '../../models/poojadisposal.model';
import { PoojasDisposalApiProvider } from '../../providers/poojas-disposal-api/poojas-disposal-api';
import { Camera, CameraOptions } from '@ionic-native/camera'
import { Geolocation } from '@ionic-native/geolocation';
import { appUser } from '../../models/user';
import { Storage } from '@ionic/storage';
import { GlobalProvider } from '../../providers/global/global';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';
import { DomSanitizer } from '@angular/platform-browser';
/**
 * Generated class for the CreateRequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-request',
  templateUrl: 'create-request.html',
})
export class CreateRequestPage {

  private disposalModel: PoojaDisposal = {
    itemName: '', itemDescription: '', isComplete: false,
    createdByUser: this.global.userEmailProvider, createdDate: new Date().toDateString()
  };
  private imgSrc: any;
  isAdmin: boolean;
  constructor(private navCtrl: NavController,
    private navParams: NavParams,
    private alertCtrl: AlertController,
    private disposalProvider: PoojasDisposalApiProvider,
    private camera: Camera,
    private launchnavigator: LaunchNavigator,
    private global: GlobalProvider,
    private geolocation: Geolocation) {

    this.disposalModel = this.navParams.data;
    // if (!this.disposalModel.disposalImage) {
    // let safeImageData = this.sanitizer.bypassSecurityTrustUrl(this.disposalModel.disposalImage);
    // let base64Image = 'data:image/jpeg;base64,' + this.sanitizer.bypassSecurityTrustUrl(this.disposalModel.disposalImage);
    // console.log('Sumit Image');
    this.imgSrc = this.disposalModel.disposalImage;
    // }

  }

  ionViewDidLoad() {
    this.isAdmin = this.global.isAdminProvider;
    // console.log('USer is admin ' + this.storage.get('isAdmin'));
    console.log('USer is adminBool ' + this.isAdmin);
  }

  saveRequest() {
    console.log(this.disposalModel);
    if (!this.disposalModel.key) {
      this.disposalProvider.addDisposal(this.disposalModel).then(ref => {
      })
    } else {
      this.disposalProvider.updateDisposal(this.disposalModel).then(ref => {
      })
    }
    this.navCtrl.push('HomePage');

  }

  completeRequest() {
    this.disposalModel.isComplete = true;
    this.disposalProvider.updateDisposal(this.disposalModel).then(ref => {
    })
    this.navCtrl.push('HomePage');

  }

  updateRequest() {
    // this.disposalProvider.addDisposal(this.disposalModel);
    console.log(this.disposalModel);
    this.disposalProvider.updateDisposal(this.disposalModel).then(ref => {
      this.navCtrl.push('HomePage');
    })
  }

  navigate() {
    let options: number[] = [parseInt(this.disposalModel.LatitudeCoordinate), parseInt(this.disposalModel.LongitudeCoordinate)];
    this.launchnavigator.navigate(options);
  }

  getImage() {
    const options: CameraOptions = {
      // quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.CAMERA,
      saveToPhotoAlbum: false,
      encodingType: this.camera.EncodingType.JPEG,
      correctOrientation: true,
      quality: 100
    }

    // this.camera.getPicture(options).then((imageData) => {
    //   this.disposalModel.disposalImage = imageData;
    //   this.disposalModel.disposalImage = normalizeURL(imageData);
    //   this.imgSrc = this.disposalModel.disposalImage;
    // }, (err) => {
    //   console.log(err);
    //   // this.presentToast(err);
    // });

    this.camera.getPicture(options).then((imageData) => {
      // let safeImageData = this.sanitizer.bypassSecurityTrustUrl(imageData);
      this.disposalModel.disposalImage = imageData;
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.imgSrc = base64Image;
    }, (err) => {
      // this.presentToast("Error while selecting image");
      console.log(err);
    });

  }

  getLocation() {
    this.geolocation.getCurrentPosition().then(pos => {
      // data can be a set of coordinates, or an error (if an error occurred).
      this.disposalModel.geoCoordinate = `latitude: ${pos.coords.latitude}, longitude: ${pos.coords.longitude}`;
      this.disposalModel.LatitudeCoordinate = `${pos.coords.latitude}`;
      this.disposalModel.LongitudeCoordinate = `${pos.coords.longitude}`;
    });
  }
  // getCurrentLocation() {
  //   this.navCtrl.push('CurrentLocationPage');
  // }

  completeConfirm() {
    let alert = this.alertCtrl.create({
      title: 'Confirm',
      message: 'Once Completed cannot be reverted..!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Complete',
          handler: () => {
            this.completeRequest();
          }
        }
      ]
    });
    alert.present();
  }


}
