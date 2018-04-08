import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HeaderColor } from '@ionic-native/header-color';
import { MusicControls } from '@ionic-native/music-controls';
import { HttpClientModule } from '@angular/common/http';
import { MyApp } from './app.component';
import { MediaStreamProvider } from '../providers/media-stream/media-stream';


@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HeaderColor,
    MusicControls,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MediaStreamProvider
  ]
})
export class AppModule {}
