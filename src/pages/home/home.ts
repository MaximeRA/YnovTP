import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  app: any = {nom: String,version: Number, complement: String};
  base64Image: String;

  constructor(public navCtrl: NavController, public camera: Camera) {
    this.app.nom = "Projet";
    this.app.version = 3.0;
    this.app.complement = "du bogoss";
  }

  rename() {
    this.app.nom = "WAOUH ça a changé";
  }

  okay() {
    this.app.complement = "Le seul et l'unique";
  }

  increment() {
    this.app.version+=1;
  }

  takePicture(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
}

    this.camera.getPicture(options).then((imageData) => {
    // imageData is either a base64 encoded string or a file URI
// If it's base64:
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      }, (err) => {
// Handle error
      });
   }
}
