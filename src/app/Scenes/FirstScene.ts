export default class FirstScene extends Phaser.Scene {
  ship: Phaser.GameObjects.Sprite;
  bullet: Phaser.GameObjects.Sprite;
  fireButton: Phaser.Input.Keyboard.Key;
  bulletTime: number;
  fireButtonTouch: Phaser.Input.Pointer;
  movementPointer: Phaser.Input.Pointer;
  wKey: Phaser.Input.Keyboard.Key;
  aKey: Phaser.Input.Keyboard.Key;
  sKey: Phaser.Input.Keyboard.Key;
  dKey: Phaser.Input.Keyboard.Key;
  shipVel: number;

  constructor(config) {
    super(config);

    //Velocitat de moviment de la ship
    this.shipVel = 15;
  }

  preload() {
    //Load assets
    this.load.image('ship', 'assets/ship.png');
    this.load.image('bullet', 'assets/bullet.png');
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
  }

  update() {
    //Logic run every 16ms
    if (this.input.pointer1.active) {
      this.ship.x = this.input.pointer1.x;
      this.ship.y = this.input.pointer1.y;
    }

    if (this.wKey.isDown) {
      this.ship.y -= this.shipVel;
    }
    if (this.aKey.isDown) {
      this.ship.x -= this.shipVel;
    }
    if (this.sKey.isDown) {
      this.ship.y += this.shipVel;
    }
    if (this.dKey.isDown) {
      this.ship.x += this.shipVel;
    }

    //Si esta prement el espai
    if (this.fireButton.isDown || this.input.pointer2.active) {
      this.fireBullet();
    }
  }


  fireBullet() {
    //Delay al disparar
    if (this.time.now > this.bulletTime) {
      // this.bullet = this.make.sprite({ x: this.ship.x, y: this.ship.y, key: 'bullet', scale: { x: .4, y: .4 } });

      //Si mante clicat per disparar, ets un noob i per lo tant et faig disparar lent
      if (this.fireButton.timeDown < this.time.now - 100 && this.fireButtonTouch.downTime < this.time.now - 100) {
        this.bulletTime = this.time.now + 500;
      } else { //Si spameas el click, dispares amb menys cooldown ;)
        this.bulletTime = this.time.now + 150;
      }

      new Bullet(this, this.ship.x, this.ship.y, 'bullet');
    }
  }
}

class Bullet extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, bullet) {
    super(scene, x, y, bullet);

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
    this.update(); // Comment this and update stop working
  }
}
