import { Component, NgModule, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import Phaser from 'phaser';
import SecondScene from '../Scenes/SecondScene';

@Component({
  selector: 'app-component-game-lvl2',
  templateUrl: './component-game-lvl2.component.html',
  styleUrls: ['./component-game-lvl2.component.scss'],
})
export class ComponentGameLvl2Component implements OnInit {

  phaserGame: Phaser.Game;
  config: Phaser.Types.Core.GameConfig;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    // this.initializeApp();
    // this.initializePhaser();
  }

  ngOnInit(): void {
    this.initializeApp();
    this.initializePhaser();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    })
  }

  initializePhaser() {
    this.config = {
      type: Phaser.AUTO,
      parent: 'game',
      scene: [SecondScene],
      scale: {
        mode: Phaser.Scale.RESIZE
      },
      render: {
        pixelArt: false
      },
      physics: {
        default: 'arcade',
      }
    };

    this.phaserGame = new Phaser.Game(this.config);
  }

}
