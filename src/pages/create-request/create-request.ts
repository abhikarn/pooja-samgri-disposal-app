import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, normalizeURL } from 'ionic-angular';
import { PoojaDisposal } from '../../models/poojadisposal.model';
import { PoojasDisposalApiProvider } from '../../providers/poojas-disposal-api/poojas-disposal-api';
import { Camera, CameraOptions } from '@ionic-native/camera'
import { Geolocation } from '@ionic-native/geolocation';
import { appUser } from '../../models/user';
import { Storage } from '@ionic/storage';
import { GlobalProvider } from '../../providers/global/global';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';
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

  private disposalModel: PoojaDisposal = { itemName: '', itemDescription: '', isComplete: false };
  private imgSrc: any;
  isAdmin: boolean;
  constructor(private navCtrl: NavController,
    private navParams: NavParams,
    private disposalProvider: PoojasDisposalApiProvider,
    private camera: Camera,
    private launchnavigator: LaunchNavigator,
    private global: GlobalProvider,
    private geolocation: Geolocation) {

    this.disposalModel = navParams.data;

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
    this.launchnavigator.navigate([12.910456799999999, 77.60508759999999], {
      start: "12.910456799999999, 77.60508759999999"
    });
  }

  getImage() {
    const options: CameraOptions = {
      // quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: this.camera.PictureSourceType.CAMERA,
      targetWidth: 30,
      targetHeight: 30,
      saveToPhotoAlbum: false,
      encodingType: this.camera.EncodingType.PNG,
      correctOrientation: true
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
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.disposalModel.disposalImage = imageData;
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


}
