import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-level-select',
  templateUrl: './page-level-select.page.html',
  styleUrls: ['./page-level-select.page.scss'],
})
export class PageLevelSelectPage implements OnInit {

  lang: string;
  test: string;

  constructor(private router: Router) {
    this.lang = location.pathname.replace('/', '').replace('/levelSelect', '');
    if (this.lang != 'es' && this.lang != 'en' && this.lang != 'ca')
      this.lang = '';
    // if(this.lang == "")
    //   window.location.href = "/en/levelSelect";

    console.log(this.lang);
  }

  ngOnInit() {
  }

  goLevel1() {
    // window.location.href = "/"+this.lang+"/play";
    this.test = this.lang + "/play";
    this.router.navigate([this.test]);
  }
  goLevel2() {
    // window.location.href = "/"+this.lang+"/play2";
    this.test = "/" + this.lang + "/play2";
    this.router.navigate([this.test]);
  }
  goLevel3() {
    // window.location.href = "/"+this.lang+"/play3";
    this.test = "/" + this.lang + "/play3";
    this.router.navigate([this.test]);
  }
  goHome() {
    // window.location.href = "/"+this.lang;
    this.test = "/" + this.lang;
    this.router.navigate([this.test]);
  }

  //Translations of the homepage texts
  title() {
    return "Level Select";
  }

  description() {
    switch (this.lang) {
      default:
        return "Select the dificulty"
        break;
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
      default:
        return "Easy"
        break;
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
      default:
        return "Normal"
        break;
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
      default:
        return "Inhuman"
        break;
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
      default:
        return "Back"
        break;
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
