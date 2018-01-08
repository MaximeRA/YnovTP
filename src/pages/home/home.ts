import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  base64Image: string;
  app: any = {nom: String,
              version: Number,
              complement: String};

  constructor(public navCtrl: NavController) {

    this.app.nom = "TP Ionic";
    this.app.version = 3.0;
    this.app.complement = "Two-ways data binding";

  }

  rename() {
    this.app.nom = "WAOUH ça a changé";
  }

  okay() {
    this.app.complement = "Et la aussi !";
  }

  increment() {
    this.app.version+=1;
  }
}
