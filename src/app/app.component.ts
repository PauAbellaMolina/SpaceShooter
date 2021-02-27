import { Component } from '@angular/core';

// import { Platform } from '@ionic/angular';
// import { SplashScreen } from '@ionic-native/splash-screen/ngx';
// import { StatusBar } from '@ionic-native/status-bar/ngx';

// import Phaser from 'phaser';
// import FirstScene from './Scenes/FirstScene';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  // phaserGame: Phaser.Game;
  // config: Phaser.Types.Core.GameConfig;

  // constructor(
  //   private platform: Platform,
  //   private splashScreen: SplashScreen,
  //   private statusBar: StatusBar
  // ) {
  //   document.getElementById("testBtn").addEventListener("click", () => {
  //     this.initializeApp();
  //     this.initializePhaser();
  //   });
  // }

  // initializeApp() {
  //   this.platform.ready().then(() => {
  //     this.statusBar.styleDefault();
  //     this.splashScreen.hide();
  //   })
  // }

  // initializePhaser() {
  //   this.config = {
  //     type: Phaser.AUTO,
  //     parent: 'game',
  //     scene: [FirstScene],
  //     scale: {
  //       mode: Phaser.Scale.RESIZE
  //     },
  //     render: {
  //       pixelArt: false
  //     },
  //     physics: {
  //       default: 'arcade',
  //     }
  //   };

  //   this.phaserGame = new Phaser.Game(this.config);
  // }
}
