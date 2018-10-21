import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, normalizeURL } from 'ionic-angular';
import { PoojaDisposal } from '../../models/poojadisposal.model';
import { PoojasDisposalApiProvider } from '../../providers/poojas-disposal-api/poojas-disposal-api';
<<<<<<< HEAD
=======
import { HomePage } from '../home/home';
>>>>>>> 532091cce91e9ba2e1cb95aa0f0d131ac1712812
import { Camera, CameraOptions } from '@ionic-native/camera'

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
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public disposalProvider: PoojasDisposalApiProvider,
    public camera: Camera) {
  }

  ionViewDidLoad() {
  }

  saveRequest() {
    // this.disposalProvider.addDisposal(this.disposalModel);
    console.log(this.disposalModel);
    this.disposalProvider.addDisposal(this.disposalModel).then(ref => {
<<<<<<< HEAD
      this.navCtrl.push('HomePage');
=======
      this.navCtrl.push(HomePage);
>>>>>>> 532091cce91e9ba2e1cb95aa0f0d131ac1712812
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


}
