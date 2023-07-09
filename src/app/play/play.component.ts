import { Component } from '@angular/core';
@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']

})
export class PlayComponent {
  episodes = [
    { title: 'Épisode 1', thumbnail: '../../assets/bg.jpeg', description: 'Description de l\'épisode 1' },
    { title: 'Épisode 2', thumbnail: '../../assets/bg2.jpg', description: 'Description de l\'épisode 2' },
    { title: 'Épisode 3', thumbnail: '../../assets/bg.jpeg', description: 'Description de l\'épisode 3' },
    // Ajoutez d'autres épisodes selon vos besoins
  ];

  carouselConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000
  };
}
