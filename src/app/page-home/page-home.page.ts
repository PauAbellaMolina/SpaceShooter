import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.page.html',
  styleUrls: ['./page-home.page.scss'],
})
export class PageHomePage implements OnInit {
  lang: string;
  test: string;
  // router: Router;

  constructor(private router: Router) {
    this.lang = location.pathname.replace('/', '');
    //if(this.lang == "")
      //window.location.href = "/en";
  }

  ngOnInit() {
  }

  goPlay() {
    // window.location.href = "/"+this.lang+"/levelSelect";
    this.test = this.lang + "/levelSelect";
    this.router.navigate([this.test]);
  }

  goToHowToPlay() {
    // window.location.href = "/"+this.lang+"/howToPlay";
    this.test = this.lang + "/howToPlay";
    this.router.navigate([this.test]);
  }

  //Translations of the homepage texts
  title() {
    return "Space Shooter";
  }

  description() {
    switch (this.lang) {
      case "":
        return "A classic space shooter game"
        break;
      case "en":
        return "A classic space shooter game"
        break;
      case "ca":
        return "Un space shooter clàssic"
        break;
      case "es":
        return "Un clasico space shooter"
        break;
    }
  }

  subDescription() {
    switch (this.lang) {
      case "":
        return "Hit PLAY and have fun!"
        break;
      case "en":
        return "Hit PLAY and have fun!"
        break;
      case "ca":
        return "Clica JUGAR i passa-ho bé!"
        break;
      case "es":
        return "Clica JUGAR i passa-lo bien!"
        break;
    }
  }

  play() {
    switch (this.lang) {
      case "":
        return "play"
        break;
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

  howToPlay() {
    switch (this.lang) {
      case "":
        return "How to play"
        break;
      case "en":
        return "How to play"
        break;
      case "ca":
        return "Com jugar-hi"
        break;
      case "es":
        return "Como jugar"
        break;
    }
  }

}
