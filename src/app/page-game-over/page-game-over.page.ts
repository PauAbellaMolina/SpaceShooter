import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-game-over',
  templateUrl: './page-game-over.page.html',
  styleUrls: ['./page-game-over.page.scss'],
})
export class PageGameOverPage implements OnInit {
  lang: string;
  score: string;

  constructor() {
    this.lang = location.pathname.replace('/', '').replace('/gameOver', '');
    if(this.lang == "")
      window.location.href = "/en/gameOver";

    if(window.location.href.indexOf('?score=') != -1)
      this.score = window.location.href.slice(window.location.href.indexOf('?score=')+7);

    console.log(this.score);
  }

  ngOnInit() {
  }

  goPlay() {
    window.location.href = "/"+this.lang+"/play";
  }

  goHome() {
    window.location.href = "/"+this.lang;
  }

  scoreTxt() {
    switch (this.lang) {
      case "en":
        return "Score"
        break;
      case "ca":
        return "Puntuació"
        break;
      case "es":
        return "Puntuación"
        break;
    }
  }

  play() {
    switch (this.lang) {
      case "en":
        return "Play Again"
        break;
      case "ca":
        return "Jugar de Nou"
        break;
      case "es":
        return "Jugar de Nuevo"
        break;
    }
  }

  home() {
    switch (this.lang) {
      case "en":
        return "<-Home"
        break;
      case "ca":
        return "<-Inici"
        break;
      case "es":
        return "<-Inicio"
        break;
    }
  }

}
