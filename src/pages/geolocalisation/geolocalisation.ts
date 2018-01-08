import { Component, ViewChild, ElementRef } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
declare var google;

@Component({
  selector: 'page-geolocalisation',
  templateUrl: 'geolocalisation.html'
})
export class GeolocalisationPage {
@ViewChild('map') mapElement: ElementRef;
map : any;
  constructor(private geolocation: Geolocation) {

  }

  ionViewDidLoad() {
      this.loadMap();
    }

    loadMap() {

      this.geolocation.getCurrentPosition().then((position) => {

        let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

        let mapOptions = {
          center: latLng,
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }

        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

      }, (err) => {
        console.log(err);
      });

      this.geolocation.watchPosition().subscribe((position) => {

        let element = document.getElementById('info');
        var ltt = String(position.coords.latitude);
        var lgt = String(position.coords.longitude);

        element.innerHTML = 'Latitude : <strong>' + position.coords.latitude;
        sessionStorage.setItem("ltt", ltt);
        element.innerHTML += '</strong><br/>Longitude : <strong>' + position.coords.longitude;
        sessionStorage.setItem("lgt", lgt);

      }, (err) => {
        console.log(err);
      });
    }

  }
