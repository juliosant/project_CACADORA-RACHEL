class Stage extends Phaser.Scene{
    create() {

        this.moviment;
        this.angle;
        this.force;

        this.add.image(150 / 2, 275, 'bg-control');
        this.add.image(962.5, 275, 'bg-button');
        this.add.image(525, 275, this.keyBackgoround);

        this.platforms = this.physics.add.staticGroup();
        
        this.coins = this.physics.add.group();

        //::::::::::::::::::::::ANIMAÇÂO DA MOEDA::::::::::::::::::::::
        this.anims.create({
            key: 'gira-gira',
            frames: this.anims.generateFrameNumbers('coin', { start: 0, end: 9 }),
            frameRate: 10,
            repeat: -1,
        });

        this.enemies = this.physics.add.group();
        this.groupEnemies = [];
        this.enemyPosition = 0;
        this.towerExisting = false;

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

                    this.platforms.create(x + 12.5, y + 12.5, this.keyBlock);
                }

                //::::::::::::::::::::::::::::::CRIANDO PLAYER::::::::::::::::::::::::::::::
                else if (this.tile === 2) {
                    this.player = this.physics.add.sprite(x + 12.5, y + 12.5, 'player');
                    this.player.setTint(0xcccccc);
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
                    this.groupEnemies[this.enemyPosition] = this.physics.add.sprite(x + 12.5, y + 12.5, 'enemy');
                    this.groupEnemies[this.enemyPosition].setCollideWorldBounds(true);
                    this.enemies.add(this.groupEnemies[this.enemyPosition]);
                    this.enemyPosition += 1;
                }

                else if (this.tile === 5) {
                    this.weapon = this.physics.add.image(x + 12.5, y + 12.5, 'weapon');
                }
                //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
                if (this.tile === 6) {

                    this.tileEndS1 = this.platforms.create(x + 12.5, y + 12.5, 'blockS1end');
                }

                if (this.tile === 7) {

                    this.tower = this.add.image(x + 12.5, y + 12.5, 'tower');
                    this.towerExisting = true;
                }
            }
        }


        //:::::::::::::::::::::::::::::BOTÃO DE TIRO:::::::::::::::::::::::::::::
        this.button = this.add.image(962.5, 250, 'button').setInteractive();
        this.button.setVisible(false);
        this.bullets = new Bullets(this);

        this.button.on('pointerdown', function (pointer) {
            this.button.setTintFill(0xc7bf97, 0xfff3c9, 0xc7bf97);
            this.bullets.fireBullet(this.player.x, this.player.y);
            this.oneBulletLess(this.button);
        }, this);

        this.button.on('pointerup', function (pointer) {
            this.button.clearTint();
        }, this);

        if (this.towerExisting) {
            this.bulletTower = this.physics.add.image(this.tower.x, this.tower.y, 'bullet');
            //::::::::::::::::::::::::::::: TEMPORÁRIO :::::::::::::::::::::::::::::
            this.tween = this.tweens.add({
                targets: this.bulletTower,
                x: this.tower.y + 100,
                duration: 4000,
                ease: 'Linear',
                repeat: 1, 
                loop: -1,
                loopDelay: 1
            });
        }


        //:::::::::::::::::::::::::::::ADD MOVIMENTAÇÃO:::::::::::::::::::::::::::::
        this.cursors = this.input.keyboard.createCursorKeys();

        this.joyStick = this.plugins.get('rexvirtualjoystickplugin').add(this, {
            x: 75,
            y: 275,
            radius: 34,
            base: this.add.circle(0, 0, 68, 0xc7bf97),
            thumb: this.add.circle(0, 0, 36, 0xfff3c9),

        })
            .on('update', this.dumpJoyStickState, this);

        this.text = this.add.text(0, 0);
        this.dumpJoyStickState();


        //:::::::::::::::::::::::::::::TEXTO DE HP, VIDA E MUNIÇÂO:::::::::::::::::::::::::::::
        this.score = currentScoreGame;
        this.scoreText = this.add.text(175, 10, 'Pontos: ' + this.score, { font: '12px emulogic', fill: '#ffa' });
        
        this.hp = 200;
        this.hpText = this.add.text(350, 10, 'Hp: ' + this.hp, { font: '12px emulogic', fill: '#00aa00' });
        
        this.getWeaponObject = this.add.text(475, 10, '[Pegue a Arma!]', { font: '12px emulogic', fill: '#a0a0a0' })
        this.amunitionBullet = 10;
        this.amunitionBulletText = this.add.text(500, 10, 'Municao: ' + this.amunitionBullet, { font: '12px emulogic', fill: '#f5a460' });
        this.amunitionBulletText.setVisible(false);
        this.noBullets = this.add.text(500, 10, 'Sem balas!', { font: '12px emulogic', fill: '#aa0000' }).setVisible(false);
        
        this.c = 120;
        this.clock = this.add.text(725, 10, 'Tempo: '+ this.c, { font: '12px emulogic', fill: '#ffa' });
        this.timedEvent = this.time.addEvent({ delay: 1000, callback: this.onEvent, callbackScope: this, loop: true });


        //:::::::::::::::::::::::::::::COLISÕES:::::::::::::::::::::::::::::
        this.physics.add.collider(this.player, this.platforms);
        this.physics.add.collider(this.enemies, this.platforms);
        this.physics.add.overlap(this.player, this.coins, this.getCoin, null, this);
        this.physics.add.overlap(this.player, this.enemies, this.damage, null, this);
        this.physics.add.overlap(this.player, this.weapon, this.getWeapon, null, this);
        this.physics.add.overlap(this.bullets, this.enemies, this.hitShot, null, this);
        this.physics.add.overlap(this.bullets, this.platforms, this.missedShot, null, this);
        //this.physics.add.overlap(this.bulletTower, this.platforms, this.missedShotTower, null, this);
    }


    dumpJoyStickState() {
        var cursorKeys = this.joyStick.createCursorKeys();
        var s = /*'Key down: '*/'';
        for (var name in cursorKeys) {
            if (cursorKeys[name].isDown) {
                //s += name + ' ';
                this.moviment = name;
            }
        }
        this.force = Math.floor(this.joyStick.force * 100) / 100;
        this.angle = Math.floor(this.joyStick.angle * 100) / 100;

        if ( this.force === 0 && this.angle === 0) {
            this.moviment = null;
        }
        this.text.setText(s);
    }

    update() {

        this.clock.setText('Tempo: ' + this.c);

        //::::::::::::::::::::ANIMAÇÃO DO INIMIGO::::::::::::::::::::
        let a;
        for (a = 0; a < this.enemies.getLength(); a++) {
            this.moveEnemy(this.groupEnemies[a]);
        }

        //::::::::::::::::::::ANIMAÇÃO DO PLAYER::::::::::::::::::::
        this.player.setVelocityX(0);
        this.player.setVelocityY(0);

        if (this.cursors.left.isDown && !this.cursors.right.isDown || this.moviment === 'left') {
            this.goLeft();
        }
        else if (this.cursors.right.isDown && !this.cursors.left.isDown || this.moviment === 'right') {
            this.goRight();
        }
        else if (this.cursors.up.isDown && !this.cursors.down.isDown || this.moviment === 'up') {
            this.goUp();
        }
        else if (this.cursors.down.isDown && !this.cursors.up.isDown || this.moviment === 'down') {
            this.goDown();
        }
        else if (this.player.setVelocityX(0) && this.player.setVelocityY(0)) {
            this.player.anims.stop('up', true);
        }
        else if ( this.force === 0 && this.angle === 0) {
            this.player.setVelocityX(0);
            this.player.setVelocityY(0);
            this.player.anims.stop('up', true);
        }

        if(this.player.x > 875 && this.player.y > 475){
            this.callNextStage();
        }
    }

    onEvent() {
        this.c--;
        if (this.c === 0) {
            this.timedEvent.remove(false);
        }
    }

    moveEnemy(enemy) {
        if (Math.floor(enemy.x - 12.5) % 25 === 0 && Math.floor(enemy.y - 12.5) % 25 === 0) {
            var enemyCol = Math.floor(enemy.x / 25);
            var enemyRow = Math.floor(enemy.y / 25);
            var validPath = [];

            if (this.maze[enemyRow][enemyCol - 1] !== 1 && this.maze[enemyRow][enemyCol - 1] !== 6 && enemy.direction !== 'RIGHT') {
                validPath.push('LEFT');
            }
            if (this.maze[enemyRow][enemyCol + 1] !== 1 && this.maze[enemyRow][enemyCol + 1] !== 6 && enemy.direction !== 'LEFT') {
                validPath.push('RIGHT');
            }
            if (this.maze[enemyRow - 1][enemyCol] !== 1 && this.maze[enemyRow - 1][enemyCol] !== 6 && enemy.direction !== 'DOWN') {
                validPath.push('UP');
            }
            if (this.maze[enemyRow + 1][enemyCol] !== 1 && this.maze[enemyRow + 1][enemyCol] !== 6 && enemy.direction !== 'UP') {
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
    damage(player, enemy) {
        this.hp -= 1;
        this.hpText.setText('Hp: ' + this.hp);

        if (this.hp === 0) {
            this.physics.pause();
            this.player.setTint(0xff0000);
            this.gameOver = true;

        }
    }

    //VARIAÇÃO DE SCORE
    getCoin(player, coin) {
        coin.disableBody(true, true);

        this.score += 10;
        this.scoreText.setText('Pontos: ' + this.score);
    }

    getWeapon(player, weapon) {
        weapon.disableBody(true, true);
        this.getWeaponObject.setVisible(false);
        this.button.setVisible(true);
        this.amunitionBulletText.setVisible(true);
    }

    hitShot(bullet, enemy) {
        enemy.disableBody(true, true);
        bullet.disableBody(true, true);
        bullet.setActive(true);

        this.score += 20;
        this.scoreText.setText('Score: ' + this.score);

        this.enemyPosition -= 1;
        if(this.enemyPosition === 0){
            this.tileEndS1.disableBody(true);
            this.tileEndS1.setVisible(false)
        }
    }
    missedShot(bullet, tile){
        bullet.disableBody(true, true);
        bullet.setActive(true);
    }
    /*missedShotTower(bullet, tile){
        bullet.disableBody(true, true);
        bullet.setActive(true);
    }*/

    oneBulletLess(button) {
        this.amunitionBullet -= 1;
        this.amunitionBulletText.setText('Municao: ' + this.amunitionBullet);

        if (this.amunitionBullet === 0) {
            button.setVisible(false);
            this.amunitionBulletText.setVisible(false);
            this.noBullets.setVisible(true);
        }
    }
}
movimentBullet = 'down';