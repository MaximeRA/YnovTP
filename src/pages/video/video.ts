import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MediaCapture, MediaFile } from '@ionic-native/media-capture';

@Component({
selector: 'page-video',
templateUrl: 'video.html',
})
export class VideoPage {

  @ViewChild('msg') msgElement: ElementRef;

  msg: any;

  public videoTaken: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private mediaCapture: MediaCapture){}


  videoCapture() {
    var options = { limit: 1, duration: 30 };
    this.mediaCapture.captureVideo(options).then(
      (data: MediaFile[]) => {
        console.log(data);
        this.videoTaken = data[0].fullPath;
  });
}
}
