export default class FirstScene extends Phaser.Scene {
  ship: Phaser.GameObjects.Sprite;
  bullet: Phaser.GameObjects.Sprite;
  enemyBase: Phaser.GameObjects.Sprite;
  fireButton: Phaser.Input.Keyboard.Key;
  bulletTime: number;
  fireButtonTouch: Phaser.Input.Pointer;
  movementPointer: Phaser.Input.Pointer;
  wKey: Phaser.Input.Keyboard.Key;
  aKey: Phaser.Input.Keyboard.Key;
  sKey: Phaser.Input.Keyboard.Key;
  dKey: Phaser.Input.Keyboard.Key;
  shipVel: number;
  arrayBullets: Array<Bullet> = [];
  arrayEnemiesBase: Array<EnemyBase> = [];
  bulletObject: Bullet;
  enemyBaseObject1: EnemyBase;
  enemyBaseObject2: EnemyBase;

  constructor(config) {
    super(config);

    //Velocitat de moviment de la ship
    this.shipVel = 15;
  }

  preload() {
    //Load assets
    this.load.image('ship', 'assets/ship.png');
    this.load.image('bullet', 'assets/bullet.png');
    this.load.image('enemyBase', 'assets/enemyBase.png');
  }

  create() {
    //Instancia de la tecla espai
    this.fireButton = this.input.keyboard.addKey('SPACE');
    this.wKey = this.input.keyboard.addKey('W');
    this.aKey = this.input.keyboard.addKey('A');
    this.sKey = this.input.keyboard.addKey('S');
    this.dKey = this.input.keyboard.addKey('D');

    this.input.addPointer();
    this.input.addPointer();

    // this.movementPointer = this.input.pointer1;
    this.fireButtonTouch = this.input.pointer2;

    this.bulletTime = 0;

    //Add assets
    this.ship = this.make.sprite({ x: window.innerWidth/2, y: window.innerHeight/2, key: 'ship', scale: { x: .2, y: .2 } });
    // this.enemyBase = this.make.sprite({ x: window.innerWidth/2, y: 300, key: 'enemyBase', scale: { x: .2, y: .2 } });
    this.enemyBaseObject1 = new EnemyBase(this, window.innerWidth/4, 300, 'enemyBase');
    this.enemyBaseObject2 = new EnemyBase(this, window.innerWidth/2, 300, 'enemyBase');
    this.arrayEnemiesBase.push(this.enemyBaseObject1);
    this.arrayEnemiesBase.push(this.enemyBaseObject2);
  }

  update() {
    //Logic run every 16ms
    if (this.input.pointer1.active) {
      this.ship.x = this.input.pointer1.x;
      this.ship.y = this.input.pointer1.y;
    }

    if (this.wKey.isDown && this.ship.y > 0) {
      this.ship.y -= this.shipVel;
    }
    if (this.aKey.isDown && this.ship.x > 0) {
      this.ship.x -= this.shipVel;
    }
    if (this.sKey.isDown && this.ship.y < window.innerHeight) {
      this.ship.y += this.shipVel;
    }
    if (this.dKey.isDown && this.ship.x < window.innerWidth) {
      this.ship.x += this.shipVel;
    }

    //Si esta prement el espai
    if (this.fireButton.isDown || this.input.pointer2.active) {
      this.fireBullet();
    }

    //Cada pas de loop comprovem si alguna bala dona a l'enemic
    this.checkhit(this.arrayEnemiesBase, this.arrayBullets);
  }

  //----------METODES-----------
  fireBullet() {
    //Delay al disparar
    if (this.time.now > this.bulletTime) {
      // this.bullet = this.make.sprite({ x: this.ship.x, y: this.ship.y, key: 'bullet', scale: { x: .4, y: .4 } });

      //Si mante clicat per disparar, ets un noob i per lo tant et faig disparar lent
      if (this.fireButton.timeDown < this.time.now - 100 && this.fireButtonTouch.downTime < this.time.now - 100) {
        this.bulletTime = this.time.now + 500;
      } else { //Si spameas el click, dispares amb menys cooldown ;)
        this.bulletTime = this.time.now + 120;
      }

      this.bulletObject = new Bullet(this, this.ship.x, this.ship.y-60, 'bullet', this.enemyBase);
      this.arrayBullets.push(this.bulletObject);

    }
  }

  checkhit(arrayEnemiesBase: Array<EnemyBase>, arrayBullets: Array<Bullet>) {
    arrayBullets.forEach(elementBullet => {
      arrayEnemiesBase.forEach(elementEnemy => {
        if(this.hit(elementBullet, elementEnemy)) {
          elementEnemy.destroy();
          elementBullet.destroy();

          arrayEnemiesBase.splice(arrayEnemiesBase.indexOf(elementEnemy), 1);
          arrayBullets.splice(arrayBullets.indexOf(elementBullet), 1);
        }
      });
    });
  }

  hit(a: Bullet, b: EnemyBase) {
    let bool = false;

    //Col·lisions horitzontals
    if (b.x + b.width >= a.x && b.x < a.x + a.width) {
      //Col·lisions verticals
      if (b.y + b.height >= a.y && b.y < a.y + a.height)
        bool = true;
    }
    //Col·lisió de a amb b
    if (b.x <= a.x && b.x + b.width >= a.x + a.width) {
      if (b.y <= a.y && b.y + b.height >= a.y + a.height)
        bool = true;
    }
    //Col·lisió de b amb a
    if (a.x <= b.x && a.x + a.width >= b.x + b.width) {
      if (a.y <= b.y && a.y + a.height >= b.y + b.height)
        bool = true;
    }

    return bool;
  }

}


//-----------CLASSES-------------

class Bullet extends Phaser.GameObjects.Sprite {
  enemyBase: Phaser.GameObjects.Sprite;
  constructor(scene, x, y, bullet, enemyBase) {
    super(scene, x, y, bullet);

    this.enemyBase = enemyBase;

    scene.add.existing(this);
  }

  update() {
    if(this.y > 0) { //Si esta dins del canvas tot ok, sino la eliminem
      this.y -= 25; //Velocitat de la bullet
    } else {
      this.destroy();
    }
  }

  preUpdate () {
    this.update(); //No se del tot que fa, pero sense aixo, l'update no tira
  }
}

class EnemyBase extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, enemyBase) {
    super(scene, x, y, enemyBase);

    scene.add.existing(this);
  }

  update() {
  }

  preUpdate () {
    this.update(); //No se del tot que fa, pero sense aixo, l'update no tira
  }
}
