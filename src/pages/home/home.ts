import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Genre } from '../../models/genre';
import { genres } from "../../models/genres";

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public genres:Genre[]
  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() {
    this.loadGenres();
  }

  loadGenres() {
    this.genres = genres;
  }

  browseGenre(genre:Genre) {
    this.navCtrl.push("GenrePage",genre,{direction:'top',updateUrl:false})
  }

}
