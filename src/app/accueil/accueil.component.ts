import { Component  } from '@angular/core';
import { Anime } from '../anime';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css'],

})
export class AccueilComponent {

  public animes: Anime[];

  constructor(){
    this.animes = [];
  }



  public searchAnimes(key: string): void {

    console.log(key);
    const results: Anime[] = [];
    for (const anime of this.animes) {
      if (anime.title.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(anime);
      }
    }
    this.animes = results;
    if (results.length === 0 || !key) {
      this.animes;
    }
  }
}
