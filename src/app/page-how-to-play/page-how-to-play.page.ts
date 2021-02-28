import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-how-to-play',
  templateUrl: './page-how-to-play.page.html',
  styleUrls: ['./page-how-to-play.page.scss'],
})
export class PageHowToPlayPage implements OnInit {
  lang: string;
  test: string;

  constructor(private router: Router) {
    this.lang = location.pathname.replace('/', '').replace('/howToPlay', '');
    if (this.lang != 'es' && this.lang != 'en' && this.lang != 'ca')
      this.lang = '';
    // if(this.lang == "")
    //   window.location.href = "/en/howToPlay";
  }

  ngOnInit() {
  }

  title() {
    switch (this.lang) {
      default:
        return "How To Play"
        break;
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

  movement() {
    switch (this.lang) {
      default:
        return "Use WASD or touch the screen to move around"
        break;
      case "en":
        return "Use WASD or touch the screen to move around"
        break;
      case "ca":
        return "Utilitza el WASD o toca la pantalla per moure't"
        break;
      case "es":
        return "Utiliza el WASD o toca la pantalla para moverte"
        break;
    }
  }
  shooting() {
    switch (this.lang) {
      default:
        return "Use SPACE or tap with another finger to shoot"
        break;
      case "en":
        return "Use SPACE or tap with another finger to shoot"
        break;
      case "ca":
        return "Utilitza l'ESPAI o toca amb un altre dit per disparar"
        break;
      case "es":
        return "Utiliza el ESPACIO o toca amb un altre dit per disparar"
        break;
    }
  }
  shootingAux() {
    switch (this.lang) {
      default:
        return "Hold SPACE to shoot repeatedly or SPAM it to shoot faster"
        break;
      case "en":
        return "Hold SPACE to shoot repeatedly or SPAM it to shoot faster"
        break;
      case "ca":
        return "Manté l'ESPAI per disparar repetidament o CLICA'L per disparar més ràpid"
        break;
      case "es":
        return "Mantén el ESPACIO para disparar repetidamente o PULSALO para disparar más rápido"
        break;
    }
  }
  energy() {
    switch (this.lang) {
      default:
        return "Every bullet costs you 10% of energy. Every kill restores 10%"
        break;
      case "en":
        return "Every bullet costs you 10% of energy. Every kill restores 10%"
        break;
      case "ca":
        return "Cada bala et costa 10% d'energía. Cada mort en restaura 10%"
        break;
      case "es":
        return "Cada bala cuesta 10% de energía. Cada muerte restaura 10%"
        break;
    }
  }

  play() {
    switch (this.lang) {
      default:
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

  goHome() {
    // window.location.href = "/"+this.lang;
    this.test = "/" + this.lang;
    this.router.navigate([this.test]);
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
