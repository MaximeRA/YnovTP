import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
/**
 * Generated class for the PhotosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-photos',
  templateUrl: 'photos.html',
})
export class PhotosPage {
    base64Image: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public camera: Camera,
            ) {
  }

  takePicture(){
     this.camera.getPicture({
         destinationType: this.camera.DestinationType.DATA_URL,
         encodingType: this.camera.EncodingType.JPEG,
         sourceType: this.camera.PictureSourceType.CAMERA,
         mediaType: this.camera.MediaType.PICTURE,
         targetWidth: 1000,
         targetHeight: 1000,
         correctOrientation: true,
         saveToPhotoAlbum: true
     }).then((imageData) => {
       // imageData is a base64 encoded string
         this.base64Image = "data:image/jpeg;base64," + imageData;
     }, (err) => {
         console.log(err);
     });
   }

}
