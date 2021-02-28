import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-level-select',
  templateUrl: './page-level-select.page.html',
  styleUrls: ['./page-level-select.page.scss'],
})
export class PageLevelSelectPage implements OnInit {

  lang: string;

  constructor() {
    this.lang = location.pathname.replace('/', '').replace('/levelSelect', '');
    // if(this.lang == "")
    //   window.location.href = "/en/levelSelect";
  }

  ngOnInit() {
  }

  goLevel1() {
    window.location.href = "/"+this.lang+"/play";
  }
  goLevel2() {
    window.location.href = "/"+this.lang+"/play2";
  }
  goLevel3() {
    window.location.href = "/"+this.lang+"/play3";
  }
  goHome() {
    window.location.href = "/"+this.lang;
  }

  //Translations of the homepage texts
  title() {
    return "Level Select";
  }

  description() {
    switch (this.lang) {
      case "en":
        return "Select the dificulty"
        break;
      case "ca":
        return "Selecciona la dificultat"
        break;
      case "es":
        return "Selecciona la dificultad"
        break;
    }
  }

  level1() {
    switch (this.lang) {
      case "en":
        return "Easy"
        break;
      case "ca":
        return "Fàcil"
        break;
      case "es":
        return "Fácil"
        break;
    }
  }

  level2() {
    switch (this.lang) {
      case "en":
        return "Normal"
        break;
      case "ca":
        return "Normal"
        break;
      case "es":
        return "Normal"
        break;
    }
  }

  level3() {
    switch (this.lang) {
      case "en":
        return "Inhuman"
        break;
      case "ca":
        return "Inhumà"
        break;
      case "es":
        return "Inhumano"
        break;
    }
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
