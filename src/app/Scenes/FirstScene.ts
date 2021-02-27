import { Bullet } from "../Classes/Bullet";
import { EnemyBase } from "../Classes/EnemyBase";

export default class FirstScene extends Phaser.Scene {
  ship: Phaser.GameObjects.Sprite;
  bullet: Phaser.GameObjects.Sprite;
  enemyBase: Phaser.GameObjects.Sprite;
  fireButton: Phaser.Input.Keyboard.Key;
  bulletTime: number = 0;
  hitTime: number = 0;
  fireButtonTouch: Phaser.Input.Pointer;
  movementPointer: Phaser.Input.Pointer;
  wKey: Phaser.Input.Keyboard.Key;
  aKey: Phaser.Input.Keyboard.Key;
  sKey: Phaser.Input.Keyboard.Key;
  dKey: Phaser.Input.Keyboard.Key;
  shipVel: number;
  energy: number;
  arrayBullets: Array<Bullet> = [];
  arrayEnemiesBase: Array<EnemyBase> = [];
  bulletObject: Bullet;
  // enemyBaseObject1: EnemyBase;
  // enemyBaseObject2: EnemyBase;
  energyBar: Phaser.GameObjects.Sprite;
  puntuation: number = 0;
  scoreTxt: Phaser.GameObjects.Text;
  scoreLabel: Phaser.GameObjects.Text;
  lifeTxt: Phaser.GameObjects.Text;
  lifeLabel: Phaser.GameObjects.Text;
  energyTxt: Phaser.GameObjects.Text;
  lifes: number = 10;

  constructor(config) {
    super(config);

    //Velocitat de moviment de la ship
    this.shipVel = 15;
    this.energy = 100;
  }

  preload() {
    //Load assets
    this.load.image('ship', 'assets/ship.png');
    this.load.image('bullet', 'assets/bullet.png');
    this.load.image('bulletEnemyBase', 'assets/bulletEnemyBase.png');
    this.load.image('enemyBase', 'assets/enemyBase.png');
    this.load.image('energyBar', 'assets/energyBar.png');
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

    //Add assets
    this.ship = this.make.sprite({ x: window.innerWidth/2, y: window.innerHeight/2, key: 'ship', scale: { x: .13, y: .13 } });
    this.energyBar = this.make.sprite({ x: 30, y: window.innerHeight/2, key: 'energyBar', scale: { x: 1, y: 1 } });

    //Array of base enemy objects
    this.arrayEnemiesBase = [new EnemyBase(this, 0, 0, 'enemyBase'),
                              new EnemyBase(this, 0, window.innerHeight, 'enemyBase'),
                              new EnemyBase(this, window.innerWidth, 0, 'enemyBase'),
                              new EnemyBase(this, window.innerWidth, window.innerHeight, 'enemyBase')];

    this.scoreLabel = this.make.text({
      x: 20,
      y: 20,
      text: 'Score: ',
      style: {
        fontSize: '28px',
        fontFamily: 'Rubik Mono One',
        color: '#ffffff',
        align: 'left',
      },
      add: true
    });
    this.scoreTxt = this.make.text({
      x: 170,
      y: 19,
      text: '0',
      style: {
        fontSize: '30px',
        fontFamily: 'Rubik Mono One',
        color: '#ffffff',
        align: 'left',
      },
      add: true
    });

    // this.lifeLabel = this.make.text({
    //   x: 20,
    //   y: 60,
    //   text: '❤️: ',
    //   style: {
    //     fontSize: '28px',
    //     fontFamily: 'Rubik Mono One',
    //     color: '#ffffff',
    //     align: 'left',
    //   },
    //   add: true
    // });

    this.lifeTxt = this.make.text({
      x: window.innerWidth/2 - 205,
      y: 40,
      text: '❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️',
      style: {
        fontSize: '30px',
        fontFamily: 'Rubik Mono One',
        color: '#ffffff',
        align: 'center',
      },
      add: true
    });

    this.energyTxt = this.make.text({
      x: 46,
      y: window.innerHeight/2 - 14,
      text: '0',
      style: {
        fontSize: '20px',
        fontFamily: 'Arial',
        color: '#6E29DE',
        align: 'left',
      },
      add: true
    });
  }

  update() {
    //Logic run every 16ms
    if (this.input.pointer1.active) {
      this.ship.x = this.input.pointer1.x;
      this.ship.y = this.input.pointer1.y - 30;
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
      //If energy at least 10, shoot
      if(this.energy > 10)
        this.fireBullet();
    }

    //Cada pas de loop comprovem si alguna bala dona a l'enemic
    this.checkhit(this.arrayEnemiesBase, this.arrayBullets);
    this.checkhitShip(this.ship, this.arrayEnemiesBase);

    //Recover energy slowly
    if(this.energy < 100)
      this.energy += 0.05;

    //Energy bar functionality
    this.energyBar.scaleY = this.energy/50;

    this.scoreTxt.text = this.puntuation.toString();
    this.energyTxt.text = this.energy.toFixed(0).toString() + "%";
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

      this.bulletObject = new Bullet(this, this.ship.x, this.ship.y-60, 'bullet', 25, false);
      this.arrayBullets.push(this.bulletObject);

      //Looses energy on every shoot
      if (this.energy - 10 > 0) { //Prevents from having negative energy
        this.energy -= 10;
      } else {
        this.energy = 0;
      }

    }
  }

  checkhit(arrayEnemiesBase: Array<EnemyBase>, arrayBullets: Array<Bullet>) {
    arrayBullets.forEach(elementBullet => {
      arrayEnemiesBase.forEach(elementEnemy => {
        if(this.hit(elementBullet, elementEnemy)) {
          //If bullet hit enemy, destroy both
          elementEnemy.destroy();
          elementBullet.destroy();

          //And add energy
          if(this.energy + 20 < 100) {
            this.energy += 20;
          } else {
            this.energy = 100;
          }

          this.puntuation += 1;

          arrayEnemiesBase.splice(arrayEnemiesBase.indexOf(elementEnemy), 1);
          arrayBullets.splice(arrayBullets.indexOf(elementBullet), 1);
        }
      });
    });
  }

  checkhitShip(ship: Phaser.GameObjects.Sprite, arrayEnemiesBase: Array<EnemyBase>) {
    arrayEnemiesBase.forEach(elementEnemy => {
      elementEnemy.arrayBullets.forEach(elementBullet => {
        if(elementBullet != null) {
          if (this.time.now > this.hitTime) {
            if(this.hit(elementBullet, ship)) {
              this.hitTime = this.time.now + 120;
              elementEnemy.destroyHittedBullet(elementBullet);
              //If bullet hit enemy, destroy the bullet
              elementBullet.alpha = 0;

              // arrayEnemiesBase.splice(arrayEnemiesBase.indexOf(elementEnemy), 1);
              // elementEnemy.arrayBullets.splice(elementEnemy.arrayBullets.indexOf(elementBullet), 1);
              console.log("Hitted");
              // console.log(this.lifeTxt.text.toString().slice(0, -1));
              this.lifeTxt.text = this.lifeTxt.toString().slice(0, -1);
            }
          }
        }
      });
    });
  }

  hit(a: Bullet, b: any) {
    let bool = false;

    //Col·lisions horitzontals
    if (b.x + 30 >= a.x && b.x - 30 < a.x + a.width) {
      //Col·lisions verticals
      if (b.y + 30 >= a.y && b.y < a.y + a.height)
        bool = true;
    }
    //Col·lisió de a amb b
    if (b.x <= a.x && b.x + 30 >= a.x + a.width) {
      if (b.y <= a.y && b.y + 30 >= a.y + a.height)
        bool = true;
    }
    //Col·lisió de b amb a
    if (a.x <= b.x && a.x + a.width >= b.x + 30) {
      if (a.y <= b.y && a.y + a.height >= b.y + 30)
        bool = true;
    }

    return bool;
  }

}
