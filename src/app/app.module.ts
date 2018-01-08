import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
//AIzaSyDkJryBLfYtDM4xVnCjQVW8D3eix7ZWuqg

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { GeolocalisationPage } from '../pages/geolocalisation/geolocalisation';
import { PhotosPage } from '../pages/photos/photos';
import { VideoPage } from '../pages/video/video';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera';
import { MediaCapture } from '@ionic-native/media-capture';
import { Geolocation } from '@ionic-native/geolocation';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    PhotosPage,
    VideoPage,
    GeolocalisationPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    PhotosPage,
    GeolocalisationPage,
    VideoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    Geolocation,
    MediaCapture,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
