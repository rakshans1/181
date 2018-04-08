import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Genre } from '../../models/genre';
import { Station } from '../../models/station';
import { MediaStreamProvider, stream_meta } from '../../providers/media-stream/media-stream';

@IonicPage()
@Component({
  selector: 'page-genre',
  templateUrl: 'genre.html',
})
export class GenrePage {
  _genre:Genre
  _stations:Station[]
  _activeStation:Station
  _meta:stream_meta
  _streamPaused:boolean

  constructor(public navCtrl: NavController, public navParams: NavParams, private mediaStreamClient:MediaStreamProvider) {
  }

  ionViewDidLoad() {
      this._genre = this.navParams.data
      this._stations = this._genre.getStations()
      this._meta = null

      this._activeStation = this.mediaStreamClient.getActiveStation()
      this.mediaStreamClient.streamMeta.subscribe(e=>{
        if (e)
          this._meta = e;
      })

      this.mediaStreamClient.streamPause.subscribe(e=>{
        this._streamPaused = e
      })
  }

  streamStation(station:Station){
    if(this.isSelectedStation(station.getID())){
      if(this._streamPaused !== true){
        this.mediaStreamClient.pauseStream()
      } else {
        this.mediaStreamClient.resumeStream()
      }
    } else {
      this._activeStation = station
      this.mediaStreamClient.changeStreamSource(station)
    }
  }

  isSelectedStation(id:string):boolean{
    return this._activeStation != null ? this._activeStation.getID() == id : false
  }

  setStreamMetaImage(image){
    if(image)
    return {
      'background-image':"url('"+image+"')"
    }
  }

  setSmallStreamMetaImage(image) {
    if(image) return image;

    return 'assets/imgs/fm.png';
  }

}
