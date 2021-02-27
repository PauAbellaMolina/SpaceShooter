import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-how-to-play',
  templateUrl: './page-how-to-play.page.html',
  styleUrls: ['./page-how-to-play.page.scss'],
})
export class PageHowToPlayPage implements OnInit {
  lang: string;

  constructor() {
    this.lang = location.pathname.replace('/', '').replace('/howToPlay', '');
    if(this.lang == "")
      window.location.href = "/en/howToPlay";
  }

  ngOnInit() {
  }

  title() {
    switch (this.lang) {
      case "en":
        return "How To Play"
        break;
      case "ca":
        return "Com Jugar-hi"
        break;
      case "es":
        return "Como Jugar"
        break;
    }
  }

  play() {
    switch (this.lang) {
      case "en":
        return "play"
        break;
      case "ca":
        return "jugar"
        break;
      case "es":
        return "jugar"
        break;
    }
  }

  goHome() {
    window.location.href = "/"+this.lang;
  }

  back() {
    switch (this.lang) {
      case "en":
        return "Back"
        break;
      case "ca":
        return "Tornar"
        break;
      case "es":
        return "Atrás"
        break;
    }
  }

}
