import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  app: any = {nom: String,version: Number, complement: String};

  constructor(public navCtrl: NavController) {
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

}

/*
  class App {
    constructor(nom:String, version:Number) {
      nom: String;
      version: Number;

    }

}
*/
