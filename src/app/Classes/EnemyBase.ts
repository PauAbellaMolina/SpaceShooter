import { Bullet } from "./Bullet";

export class EnemyBase extends Phaser.GameObjects.Sprite {
  axis: number;
  enemyVelY: number;
  enemyVelX: number;
  axisX: number;
  axisY: number;
  bulletObject: any;
  counter: number = 0;
  arrayBullets: Array<Bullet> = [];
  bullVel: number;

  constructor(scene, x, y, enemyBase, bullVel) {
    super(scene, x, y, enemyBase);

    //0 = abaix
    //1 = right
    //2 = amunt
    //3 = left
    this.axis = 0;

    this.enemyVelY = 7;
    this.enemyVelX = 13;

    this.axisX = Math.floor(Math.random() * (2 - 0)) + 0;
    this.axisY = Math.floor(Math.random() * (2 - 0)) + 0;

    this.bullVel = bullVel;

    scene.add.existing(this);
  }

  update() {
    //Bounds bounce
    if(this.x < 10 || this.x > window.innerWidth-10) {
      if (this.axisX == 0) { this.axisX = 1; this.enemyVelX = Math.floor(Math.random() * (14 - 5)) + 5; } else { this.axisX = 0; this.enemyVelX = Math.floor(Math.random() * (14 - 5)) + 5; }
      this.axisY = Math.floor(Math.random() * (2 - 0)) + 0;
    }

    if(this.y < 10 || this.y > window.innerHeight-10) {
      if (this.axisY == 0) { this.axisY = 1; this.enemyVelX = Math.floor(Math.random() * (10 - 3)) + 3; } else { this.axisY = 0; this.enemyVelX = Math.floor(Math.random() * (10 - 3)) + 3; }
      this.axisX = Math.floor(Math.random() * (2 - 0)) + 0;
    }

    //Movement
    if (this.axisX == 0) {
      this.x -= this.enemyVelX;
    } else if (this.axisX == 1) {
      this.x += this.enemyVelX;
    }

    if (this.axisY == 0) {
      this.y -= this.enemyVelY;
    } else if (this.axisY == 1) {
      this.y += this.enemyVelY;
    }

    this.counter += 0.1;

    //Every a bit of time, shoot
    if(Number(this.counter.toFixed(1))%5 == 0) {
      this.bulletObject = new Bullet(this.scene, this.x, this.y, 'bulletEnemyBase', this.bullVel, true);
      this.arrayBullets.push(this.bulletObject);
    }

  }

  //Remove the destroyed bullet from the array
  destroyHittedBullet(elementBullet: Bullet) {
    this.arrayBullets.splice(this.arrayBullets.indexOf(elementBullet), 1);
  }

  preUpdate () {
    this.update(); //No se del tot que fa, pero sense aixo, l'update no tira
  }
}
