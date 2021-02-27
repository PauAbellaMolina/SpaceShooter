export class Bullet extends Phaser.GameObjects.Sprite {
  enemyBase: Phaser.GameObjects.Sprite;
  bulletVel: number;
  random: boolean;
  randomDirection: number;

  constructor(scene, x, y, bullet, bulletVel, random) {
    super(scene, x, y, bullet);

    this.bulletVel = bulletVel;

    this.random = random;

    this.randomDirection = Math.floor(Math.random() * (8 - 0)) + 0;

    scene.add.existing(this);
  }

  update() {
    if(this.y > -50 && this.y < window.innerHeight+50 && this.x > -50 && this.x < window.innerWidth+50) { //Si esta dins del canvas tot ok, sino la eliminem
      if (this.random) {
        switch (this.randomDirection){
          case 0: {
            this.y -= this.bulletVel;
            this.x -= this.bulletVel;
            break;
          }

          case 1: {
            this.y -= this.bulletVel;
            break;
          }

          case 2: {
            this.y += this.bulletVel;
            this.x += this.bulletVel;
            break;
          }

          case 3: {
            this.x += this.bulletVel;
            break;
          }

          case 4: {
            this.y += this.bulletVel;
            this.x += this.bulletVel;
            break;
          }

          case 5: {
            this.y += this.bulletVel;
            break;
          }

          case 6: {
            this.y += this.bulletVel;
            this.x -= this.bulletVel;
            break;
          }

          case 7: {
            this.x -= this.bulletVel;
            break;
          }
        }
      } else {
        this.y -= this.bulletVel; //Velocitat de la bullet
      }
    } else {
      this.destroy();
    }
  }

  preUpdate () {
    this.update(); //No se del tot que fa, pero sense aixo, l'update no tira
  }
}
