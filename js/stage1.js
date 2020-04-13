class Stage1 extends Phaser.Scene {


    create() {

        this.add.image(150 / 2, 275, 'bg-control');
        this.add.image(962.5, 275, 'bg-button');
        this.add.image(525, 275, 'bg');

        this.maze = [

            /*  1: local onde ficará os blocos
               2: Local onde Rachel começará a fase
               3: local onde estará as moedas.
               4: Local inicial do inimigo.
               5: local onde estará a arma de Rachel
           */

            [],
            [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0, 1, 2, 0, 0, 0, 0, 1, 4, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 4, 0, 9, 0, 0, 1],
            [0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1],
            [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 0, 1, 3, 1, 1, 0, 1, 0, 1],
            [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1],
            [0, 0, 0, 0, 0, 0, 1, 3, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
            [0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1],
            [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1],
            [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1],
            [0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1],
            [0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1],
            [0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 4, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 4, 1],
            [0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 3, 0, 4, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1],
            [0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1],
            [0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1],
            [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 4, 0, 3, 1, 1, 0, 1, 0, 0, 1],
            [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        ]
        this.platforms = this.physics.add.staticGroup();

        this.coins = this.physics.add.group();

        this.enemies = this.physics.add.group();
        this.groupEnemies = [];
        var enemyPosition = 0;

        //::::::::::::::::::::::ANIMAÇÂO DA MOEDA::::::::::::::::::::::
        this.anims.create({
            key: 'gira-gira',
            frames: this.anims.generateFrameNumbers('coin', { start: 0, end: 9 }),
            frameRate: 10,
            repeat: -1,
        });

        ////::::::::::::::::::::::ANIMAÇÂO DOS INIMIGOS::::::::::::::::::::::
        this.anims.create({
            key: 'goLeft',
            frames: this.anims.generateFrameNumbers('enemy', { start: 16, end: 23 }),
            frameRate: 10,
            repeat: -1,
        });
        this.anims.create({
            key: 'goRight',
            frames: this.anims.generateFrameNumbers('enemy', { start: 8, end: 15 }),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'goUp',
            frames: this.anims.generateFrameNumbers('enemy', { start: 24, end: 31 }),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'goDown',
            frames: this.anims.generateFrameNumbers('enemy', { start: 0, end: 7 }),
            frameRate: 10,
            repeat: -1
        });

        for (var row in this.maze) {
            for (var col in this.maze[row]) {
                this.tile = this.maze[row][col]

                var x = col * 25;
                var y = row * 25;

                //::::::::::::::::::::::::::::::CRIANDO BLOCOS::::::::::::::::::::::::::::::
                if (this.tile === 1) {

                    this.platforms.create(x + 12.5, y + 12.5, 'block');
                }

                //::::::::::::::::::::::::::::::CRIANDO PLAYER::::::::::::::::::::::::::::::
                else if (this.tile === 2) {
                    this.player = this.physics.add.sprite(x + 12.5, y + 12.5, 'player');
                    this.player.setTint(0xcccccc);
                    //:::::::::::::::::::::::::::::::::::::::::::

                    //:::::::::::::::::::::::::::::::::::::::::::
                    this.player.setBounce(1);
                    this.player.setCollideWorldBounds(true);

                    //animar para a esquerda
                    this.anims.create({
                        key: 'left',
                        frames: this.anims.generateFrameNumbers('player', { start: 17, end: 23 }),
                        frameRate: 10,
                        repeat: -1
                    });
                    //animar para a direita
                    this.anims.create({
                        key: 'right',
                        frames: this.anims.generateFrameNumbers('player', { start: 9, end: 15 }),
                        frameRate: 10,
                        repeat: -1

                    });
                    //animar para a cima
                    this.anims.create({
                        key: 'up',
                        frames: this.anims.generateFrameNumbers('player', { start: 25, end: 31 }),
                        frameRate: 10,
                        repeat: -1

                    });
                    //animar para a baixo
                    this.anims.create({
                        key: 'down',
                        frames: this.anims.generateFrameNumbers('player', { start: 1, end: 7 }),
                        frameRate: 10,
                        repeat: -1
                    });

                }

                //::::::::::::::::::::::::::::::CRIANDO MOEDA::::::::::::::::::::::::::::::
                else if (this.tile === 3) {
                    this.coins.create(x + 12.5, y + 12.5, 'coin').play('gira-gira');
                }

                //::::::::::::::::::::::::::::::CRIANDO INIMIGO::::::::::::::::::::::::::::::

                else if (this.tile === 4) {
                    this.groupEnemies[enemyPosition] = this.physics.add.sprite(x + 12.5, y + 12.5, 'enemy');
                    this.groupEnemies[enemyPosition].setCollideWorldBounds(true);
                    this.enemies.add(this.groupEnemies[enemyPosition]);
                    enemyPosition += 1;
                }

                else if (this.tile === 9) {
                    this.weapon = this.physics.add.image(x + 12.5, y + 12.5, 'weapon');
                }
                //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
            }
        }



        //:::::::::::::::::::::::::::::BOTÃO DE TIRO:::::::::::::::::::::::::::::
        this.button = this.add.image(962.5, 250, 'button').setInteractive();
        this.button.setVisible(false);
        this.bullets = new Bullets(this);

        this.button.on('pointerdown', function (pointer) {
            this.button.setTintFill(0xc7bf97, 0xfff3c9, 0xc7bf97);
            this.bullets.fireBullet(this.player.x, this.player.y);
            this.menosBalas(this.button);
        }, this);

        this.button.on('pointerup', function (pointer) {
            this.button.clearTint();
        }, this);



        //:::::::::::::::::::::::::::::ADD MOVIMENTAÇÃO:::::::::::::::::::::::::::::
        this.cursors = this.input.keyboard.createCursorKeys();

        this.joyStick = this.plugins.get('rexvirtualjoystickplugin').add(this, {
            x: 90,
            y: 275,
            radius: 50,
            base: this.add.circle(0, 0, 50, 0xc7bf97),
            thumb: this.add.circle(0, 0, 25, 0xfff3c9),

        })
            .on('update', this.dumpJoyStickState, this);

        this.text = this.add.text(0, 0);
        this.dumpJoyStickState();


        //:::::::::::::::::::::::::::::TEXTO DE HP, VIDA E MUNIÇÂO:::::::::::::::::::::::::::::
        this.score = 0;
        this.scoreText = this.add.text(225, 10, 'Score: ' + this.score, { font: '12px emulogic', fill: '#ffa' });
        this.hp = 200;
        this.hpText = this.add.text(450, 10, 'Hp: ' + this.hp, { font: '12px emulogic', fill: '#ffa' });
        this.amunitionBullet = 6;
        this.amunitionBulletText = this.add.text(675, 10, 'Amunition: ' + this.amunitionBullet, { font: '12px emulogic', fill: '#ffa' });
        this.amunitionBulletText.setVisible(false);

        //:::::::::::::::::::::::::::::COLISÕES:::::::::::::::::::::::::::::
        this.physics.add.collider(this.player, this.platforms);
        this.physics.add.collider(this.enemies, this.platforms);
        this.physics.add.overlap(this.player, this.coins, this.pegaMoeda, null, this);
        this.physics.add.overlap(this.player, this.enemies, this.tomaDano, null, this);
        this.physics.add.overlap(this.player, this.weapon, this.pegaArma, null, this);
        this.physics.add.overlap(this.bullets, this.enemies, this.tiroAcertado, null, this);
    }


    dumpJoyStickState() {
        var cursorKeys = this.joyStick.createCursorKeys();
        var s = /*'Key down: '*/'';
        for (var name in cursorKeys) {
            if (cursorKeys[name].isDown) {
                //s += name + ' ';
                moviment = name;
            }
        }
        force = Math.floor(this.joyStick.force * 100) / 100;
        angle = Math.floor(this.joyStick.angle * 100) / 100;

        if (force === 0 && angle === 0) {
            moviment = null;
        }
        this.text.setText(s);
    }



    update() {
        let a;
        for (a = 0; a < this.enemies.getLength(); a++) {
            this.moveEnemy(this.groupEnemies[a]);
        }

        //::::::::::::::::::::ANIMAÇÃO DO PLAYER::::::::::::::::::::
        this.player.setVelocityX(0);
        this.player.setVelocityY(0);

        if (this.cursors.left.isDown && !this.cursors.right.isDown || moviment === 'left') {

            this.goLeft();
        }
        else if (this.cursors.right.isDown && !this.cursors.left.isDown || moviment === 'right') {
            this.goRight();
        }
        else if (this.cursors.up.isDown & !this.cursors.down.isDown || moviment === 'up') {
            this.goUp();
        }
        else if (this.cursors.down.isDown && !this.cursors.up.isDown || moviment === 'down') {
            this.goDown();
        }
        else if (this.player.setVelocityX(0) && this.player.setVelocityY(0)) {

            this.player.anims.stop('up', true);

        }
        else if (force === 0 && angle === 0) {
            this.player.setVelocityX(0);
            this.player.setVelocityY(0);
            this.player.anims.stop('up', true);
        }

    }

    moveEnemy(enemy) {
        if (Math.floor(enemy.x - 12.5) % 25 === 0 && Math.floor(enemy.y - 12.5) % 25 === 0) {
            var enemyCol = Math.floor(enemy.x / 25);
            var enemyRow = Math.floor(enemy.y / 25);
            var validPath = [];

            if (this.maze[enemyRow][enemyCol - 1] !== 1 && enemy.direction !== 'RIGHT') {
                validPath.push('LEFT');
            }
            if (this.maze[enemyRow][enemyCol + 1] !== 1 && enemy.direction !== 'LEFT') {
                validPath.push('RIGHT');
            }
            if (this.maze[enemyRow - 1][enemyCol] !== 1 && enemy.direction !== 'DOWN') {
                validPath.push('UP');
            }
            if (this.maze[enemyRow + 1][enemyCol] !== 1 && enemy.direction !== 'UP') {
                validPath.push('DOWN');
            }

            enemy.direction = validPath[Math.floor(Math.random() * validPath.length)];
        }

        switch (enemy.direction) {
            case 'LEFT':
                enemy.x -= 1;
                enemy.anims.play('goLeft', true);
                break;
            case 'RIGHT':
                enemy.x += 1;
                enemy.anims.play('goRight', true);
                break;
            case 'UP':
                enemy.y -= 1;
                enemy.anims.play('goUp', true)
                break;
            case 'DOWN':
                enemy.y += 1;
                enemy.anims.play('goDown', true)
                break;

        }
    }


    goLeft() {
        this.player.setVelocityX(-80);
        this.player.anims.play('left', true);
        movimentBullet = 'left';
    }
    goRight() {
        this.player.setVelocityX(80);
        this.player.anims.play('right', true);
        movimentBullet = 'right';
    }
    goUp() {
        this.player.setVelocityY(-80);
        this.player.anims.play('up', true);
        movimentBullet = 'up';
    }
    goDown() {
        this.player.setVelocityY(80);
        this.player.anims.play('down', true);
        movimentBullet = 'down';
    }

    //VARIAÇÃO DE DANO
    tomaDano(player, enemy) {
        this.hp -= 1;
        this.hpText.setText('Hp: ' + this.hp);

        if (this.hp === 0) {
            this.physics.pause();
            this.player.setTint(0xff0000);
            this.gameOver = true;

        }
    }

    //VARIAÇÃO DE SCORE
    pegaMoeda(player, coin) {
        coin.disableBody(true, true);

        this.score += 10;
        this.scoreText.setText('Score: ' + this.score);
    }

    pegaArma(player, weapon) {
        weapon.disableBody(true, true);
        this.button.setVisible(true);
        this.amunitionBulletText.setVisible(true);
    }

    tiroAcertado(bullet, enemy) {
        enemy.disableBody(true, true);
        bullet.disableBody(true, true);
        bullet.setActive(true);

        this.score += 20;
        this.scoreText.setText('Score: ' + this.score)
    }

    menosBalas(button) {
        this.amunitionBullet -= 1;
        this.amunitionBulletText.setText('Amunition: ' + this.amunitionBullet);

        if (this.amunitionBullet === 0) {
            button.setVisible(false);
            this.amunitionBulletText.setVisible(false);

        }
    }
}

var moviment;
var angle;
var force;
var movimentBullet = 'down';

class Bullet extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, 'bullet');
    }

    fire(x, y) {
        this.body.reset(x, y);

        this.setActive(true);
        this.setVisible(true);

        if (movimentBullet === 'up') {
            this.setVelocityY(-300);
        }
        else if (movimentBullet === 'down') {
            this.setVelocityY(300);
        }
        else if (movimentBullet === 'left') {
            this.setVelocityX(-300);
        }
        else if (movimentBullet === 'right') {
            this.setVelocityX(300);
        }
    }

}

class Bullets extends Phaser.Physics.Arcade.Group {
    constructor(scene) {
        super(scene.physics.world, scene);

        this.createMultiple({
            frameQuantity: 6,
            key: 'bullet',
            active: false,
            visible: false,
            classType: Bullet
        });
    }

    fireBullet(x, y) {
        let bullet = this.getFirstDead(false);

        if (bullet) {
            bullet.fire(x, y);
        }
    }
}