import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, normalizeURL } from 'ionic-angular';
import { PoojaDisposal } from '../../models/poojadisposal.model';
import { PoojasDisposalApiProvider } from '../../providers/poojas-disposal-api/poojas-disposal-api';
import { Camera, CameraOptions } from '@ionic-native/camera'
import { Geolocation } from '@ionic-native/geolocation';
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

  private disposalModel: PoojaDisposal = { itemName: '', itemDescription: '' };
  private imgSrc: any;
  constructor(private navCtrl: NavController,
    private navParams: NavParams,
    private disposalProvider: PoojasDisposalApiProvider,
    private camera: Camera,
    private geolocation: Geolocation) {
  }

  ionViewDidLoad() {
  }

  saveRequest() {
    // this.disposalProvider.addDisposal(this.disposalModel);
    console.log(this.disposalModel);
    this.disposalProvider.addDisposal(this.disposalModel).then(ref => {
      this.navCtrl.push('HomePage');
    })
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

    this.camera.getPicture(options).then((imageData) => {
      this.disposalModel.disposalImage = imageData;
      this.disposalModel.disposalImage = normalizeURL(imageData);
      this.imgSrc = this.disposalModel.disposalImage;
    }, (err) => {
      console.log(err);
      // this.presentToast(err);
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
