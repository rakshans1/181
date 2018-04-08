import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HeaderColor } from '@ionic-native/header-color';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = "HomePage";

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, headerColor: HeaderColor) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
      headerColor.tint('#6E4555');
    });
  }
}

