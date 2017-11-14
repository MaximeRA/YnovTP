import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  app: any = {nom: String,version: Number, complement: String, base64Image: String, Base64ToGallery: String};

  constructor(public navCtrl: NavController,
              public camera: Camera,
              private base64ToGallery: Base64ToGallery) {
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
     this.app.camera.getPicture({
         destinationType: this.app.camera.DestinationType.DATA_URL,
         targetWidth: 1000,
         targetHeight: 1000
     }).then((imageData) => {
       // imageData is a base64 encoded string
         this.app.base64Image = "data:image/jpeg;base64," + imageData;

         this.app.base64Image = this.base64ToGallery;

         this.base64ToGallery.base64ToGallery(imageData, { prefix: '_img' }).then(
           res => console.log('Saved image to gallery ', res),
           err => console.log('Error saving image to gallery ', err)
          );

     }, (err) => {
         console.log(err);
     });
   }
}
