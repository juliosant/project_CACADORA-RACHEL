class Stage extends Phaser.Scene {
    create() {

        this.moviment;
        this.angle;
        this.force;
        this.introStage = true;

        //::::::Backrounds::::::
        this.add.image(150 / 2, 275, 'bg-control');
        this.add.image(962.5, 275, 'bg-button');
        this.add.image(525, 275, this.keyBackground);

        //::::::Agrupar blocos:::::::
        this.platforms = this.physics.add.staticGroup();

        //::::::Agrupar moedas:::::::
        this.coins = this.physics.add.group();
        this.qtdCoins = 0
        //::::::Animação da moeda::::::
        this.anims.create({
            key: 'spin',
            frames: this.anims.generateFrameNumbers('coin', { start: 0, end: 9 }),
            frameRate: 10,
            repeat: -1,
        });

        //::::::Agrupar inimigos::::::
        this.enemies = this.physics.add.group();
        this.groupEnemies = [];
        this.enemyPosition = 0;

        //::::::Animação do inimigo::::::
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

        //:::::::Agrupar armadilhas::::::
        if(this.isStage2){
            this.obstacles = this.physics.add.group();
        }
        else if(this.isStage3){
            this.obstacles = this.physics.add.staticGroup();
        }
        this.groupObstacle = [];
        this.positionObstacle = 0;

        //::::::Instanciar objetos no labirinto::::::
        for (var row in this.maze) {
            for (var col in this.maze[row]) {
                this.tile = this.maze[row][col]

                var x = col * 25;
                var y = row * 25;

                //::::::Instanciar blocos::::::
                if (this.tile === 1) {

                    this.platforms.create(x + 12.5, y + 12.5, this.keyBlock);
                }

                //::::::Instanciar player::::::
                else if (this.tile === 2) {
                    this.player = this.physics.add.sprite(x + 12.5, y + 12.5, 'player').setTint('0xeeeeee');
                    //this.player.setTint(0xcccccc);
                    this.player.setBounce(1);
                    this.player.setCollideWorldBounds(true);

                    //::::::Animação do player::::::
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

                //::::::Instanciar moeda::::::
                else if (this.tile === 3) {
                    this.coins.create(x + 12.5, y + 12.5, 'coin').play('spin').setScale(0.75);
                    this.qtdCoins += 1;
                }

                //::::::Instanciar inimigos::::::
                else if (this.tile === 4) {
                    this.groupEnemies[this.enemyPosition] = this.physics.add.sprite(x + 12.5, y + 12.5, 'enemy').setTint('0xff5555');
                    this.groupEnemies[this.enemyPosition].setCollideWorldBounds(true);
                    this.enemies.add(this.groupEnemies[this.enemyPosition]);
                    this.enemyPosition += 1;
                }

                //::::::Instanciar arma::::::
                else if (this.tile === 5) {
                    this.weapon = this.physics.add.image(x + 12.5, y + 12.5, 'weapon');
                }

                //::::::Instanciar barreira::::::
                if (this.tile === 6) {

                    this.tileEnd = this.platforms.create(x + 12.5, y + 12.5, 'blockend').setScale(1.5);
                }

                //::::::Instanciar armadilha::::::
                if (this.tile === 7) {
                    if (this.isStage2) {
                        this.groupObstacle[this.positionObstacle] = this.physics.add.image(x + 12.5, y + 12.5, 'spike-ball');
                        this.obstacles.add(this.groupObstacle[this.positionObstacle]);
                    }
                    else if (this.isStage3) {
                        this.groupObstacle[this.positionObstacle] = this.obstacles.create(x + 12.5, y + 12.5, 'tomb');     
                        this.leverExists = true;
                    }
                    this.positionObstacle += 1;
                }
                //::::::Instanciar alavanca (Somente na 3a fase)::::::
                if (this.tile === 8 && this.leverExists) {
                    this.lever = this.physics.add.image(x + 12.5, y + 12.5, 'lever');
                }
            }
        }

        //:::::::::::::::::::::::::BOTÔES:::::::::::::::::::::::::::
        //::::::Botão de tiro::::::
        this.weaponButton = this.add.image(962.5, 250, 'weaponButton').setInteractive();
        this.weaponButton.setVisible(false);
        this.bullets = new Bullets(this);

        this.weaponButton.on('pointerdown', function (pointer) {
            this.weaponButton.setTintFill(0xc7bf97, 0xfff3c9, 0xc7bf97);
            this.bullets.fireBullet(this.player.x, this.player.y);
            this.oneBulletLess(this.weaponButton);
        }, this);

        this.weaponButton.on('pointerup', function (pointer) {
            this.weaponButton.clearTint();
        }, this);

        //::::::Botão para desativar armadilhas::::::
        if (this.isStage3) {
            this.leverButton = this.add.image(962.5, 350, 'leverButton').setInteractive()
                .setVisible(false);
            this.leverButton.on('pointerdown', function (pointer) {
                this.leverButton.setTintFill(0xc7bf97, 0xfff3c9, 0xc7bf97);
                let i;
                let j = this.obstacles.getLength();
                for (i = 0; i < j; i++) {
                    this.destroyTomb(this.groupObstacle[i]);
                }
                this.leverButton.destroy();

            }, this);
        }


        //:::::::Movimento das aradilhas dinâmicas:::::::
        if (this.isStage2) {

            this.tween = this.tweens.add({
                targets: this.groupObstacle[0],

                x: this.groupObstacle[0].x - 50,
                duration: 300,
                ease: 'Power',
                yoyo: true,
                loop: -1,
                loopDelay: 2500,

            });

            this.tween = this.tweens.add({
                targets: this.groupObstacle[1],

                y: this.groupObstacle[1].y - 50,
                duration: 500,
                ease: 'Power',
                yoyo: true,
                loop: -1,
                loopDelay: 1500,


            });

            this.tween = this.tweens.add({
                targets: this.groupObstacle[2],
                y: this.groupObstacle[2].y + 70,
                duration: 100,
                ease: 'Power',
                yoyo: true,
                loop: -1,
                loopDelay: 2500,


            });

            this.tween = this.tweens.add({
                targets: this.groupObstacle[3],

                x: this.groupObstacle[3].x + 70,
                duration: 400,
                ease: 'Power',
                yoyo: true,
                loop: -1,
                loopDelay: 1500,

            });
        }

        //:::::::::::::::::::RECURSO DE ENTRADA:::::::::::::::::::
        //:::::::Instancia de teclado:::::::
        this.cursors = this.input.keyboard.createCursorKeys();

        //::::::Instancia do controle virtual::::::
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


        //:::::::::::::::::::::::::::::INFORMAÇÔES DE NA PARTE DE CIMA DA TELA:::::::::::::::::::::::::::::
        //::::::Pontuação::::::
        if(this.isStage1){
            currentScore = 0
        }
        this.score = currentScore;
        this.scoreText = this.add.text(175, 10, 'Pontos: ' + this.score, { font: '12px emulogic', fill: '#ffa' });

        //::::::Situação de armamento::::::
        this.amunitionBullet = 7;
        //::::::Situação 1
        this.getWeaponObject = this.add.text(400, 10, '[Pegue a Arma!]', { font: '12px emulogic', fill: '#a0a0a0' })
        //::::::Situação 2
        this.amunitionBulletText = this.add.text(400, 10, 'Municao: ' + this.amunitionBullet + ' balas', { font: '12px emulogic', fill: '#f5a460' });
        this.amunitionBulletText.setVisible(false);
        //::::::Situação 3
        this.noBullets = this.add.text(425, 10, 'Sem balas!', { font: '12px emulogic', fill: '#aa0000' }).setVisible(false);

        //::::::Tempo::::::
        this.c = 150;
        this.clock = this.add.text(725, 10, 'Tempo: ' + this.c, { font: '12px emulogic', fill: '#ffa' });
        this.timedEvent = this.time.addEvent({ delay: 1000, callback: this.timer, callbackScope: this, loop: true });

        //:::::::::::::::::::::::::::::COLISÕES:::::::::::::::::::::::::::::
        //::::::Colisões simples::::::
        this.physics.add.collider(this.player, this.platforms);
        this.physics.add.collider(this.enemies, this.platforms);
        //::::::Colisões reativas::::::
        this.physics.add.overlap(this.player, this.coins, this.getCoin, null, this);
        this.physics.add.overlap(this.player, this.enemies, this.damage, null, this);
        this.physics.add.overlap(this.player, this.weapon, this.getWeapon, null, this);
        this.physics.add.overlap(this.bullets, this.enemies, this.hitShot, null, this);
        this.physics.add.overlap(this.bullets, this.platforms, this.missedShot, null, this);
        if (this.isStage2) {
            this.physics.add.overlap(this.player, this.obstacles, this.damage, null, this);
        }
        else if (this.isStage3) {
            this.physics.add.collider(this.player, this.obstacles);
            this.physics.add.overlap(this.player, this.lever, this.getLever, null, this);
            this.tombFinal = this.physics.add.image(862.5, 87, 'tombFinal');
            this.physics.add.overlap(this.player, this.tombFinal, this.damage, null, this);
            this.JulielText = this.add.text(800, 435, 'Juliel', {font: '12px emulogic', fill: '#ffffff'});
            this.gameObjective = this.physics.add.image(840, 470,'objective');
            this.physics.add.overlap(this.player, this.gameObjective, this.callNextStage, null, this);
        }

        //::::::::::::::::::::::::::ORIENTAÇÔES UMICIAIS DA FASE::::::::::::::::::::::::::
        //:::::::Imagem de orientação
        this.introductingStage = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2, this.introductionStage);
        //:::::::Botão para fechar orientação da fase
        this.closeintroductionButton = this.add.text(420, 400, '[Fechar]', { font: '20px emulogic', fill: '#f7f2ad' }).setInteractive();
        this.closeintroductionButton.once('pointerdown', function (pointer) {
            this.closeintroductionButton.destroy();
            this.introductingStage.destroy();
            //:::::::Apresentacao do labirinto:::::::
            //:::::::Mostrado apenas depois da montagem do labirinto
            this.nameStage0 = this.add.text(512, 250, this.nameMaze0, { font: '15px emulogic', fill: '#ffffff' })
                .setOrigin(0.5);
            this.nameStage1 = this.add.text(512, 300, this.nameMaze1, { font: '37px emulogic', fill: '#ffffff' })
                .setOrigin(0.5);
            this.presentationTime = this.time.addEvent({ delay: 3000, callback: this.endOfStagePresentation, callbackScope: this, loop: false })
            this.introStage = false;
        }, this);

        //::::::::::::::::::::Particulas:::::::::::::::
        this.particles = this.add.particles('particles');
        this.blood = this.add.particles('blood');
        this.blockParticle = this.add.particles('blockParticle');
        if(this.isStage3){
            this.tombFinalParticle = this.add.particles('tombFinalParticle');
            this.tombParticle = this.add.particles('tombParticle');
        }
    }

    //:::::::Movimentação no controle virtual:::::::
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

        if (this.force === 0 && this.angle === 0) {
            this.moviment = null;
        }
        this.text.setText(s);
    }

    update() {
        if (this.introStage == false) {
            this.clock.setText('Tempo: ' + this.c);

            this.scoreText.setText('Pontos: ' + this.score)
            //::::::::::::::::::::ANIMAÇÃO DO INIMIGO::::::::::::::::::::
            let a;
            for (a = 0; a < this.enemies.getLength(); a++) {
                this.moveEnemy(this.groupEnemies[a]);
            }

            //::::::::::::::::::::ANIMAÇÃO DO PLAYER::::::::::::::::::::
            //:::::::Sem movimento:::::::
            this.player.setVelocityX(0);
            this.player.setVelocityY(0);
            //:::::::Animação direcionais:::::::
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
            else if (this.force === 0 && this.angle === 0) {
                this.player.setVelocityX(0);
                this.player.setVelocityY(0);
                this.player.anims.stop('up', true);
            }

            if (this.player.x > 875 && this.player.y > 475) {
                this.callNextStage();
            }
        }
    }

    endOfStagePresentation() {

        this.nameStage0.destroy();
        this.nameStage1.destroy();
    }
    timer() {
        if (this.introStage == false) {
            this.c--;
        }
        if (this.c === 0) {
            this.timedEvent.remove(false);
            this.gameOver();
        }
    }
    //:::::::::::::Andar do inimigo:::::::::::::
    moveEnemy(enemy) {
        if (Math.floor(enemy.x - 12.5) % 25 === 0 && Math.floor(enemy.y - 12.5) % 25 === 0) {
            var enemyCol = Math.floor(enemy.x / 25);
            var enemyRow = Math.floor(enemy.y / 25);
            var validPath = [];

            if (this.maze[enemyRow][enemyCol - 1] !== 1 && this.maze[enemyRow][enemyCol - 1] !== 6 && this.maze[enemyRow][enemyCol - 1] !== 7 && enemy.direction !== 'RIGHT') {
                validPath.push('LEFT');
            }
            if (this.maze[enemyRow][enemyCol + 1] !== 1 && this.maze[enemyRow][enemyCol + 1] !== 6 && this.maze[enemyRow][enemyCol + 1] !== 7 && enemy.direction !== 'LEFT') {
                validPath.push('RIGHT');
            }
            if (this.maze[enemyRow - 1][enemyCol] !== 1 && this.maze[enemyRow - 1][enemyCol] !== 6 && this.maze[enemyRow - 1][enemyCol] !== 7 && enemy.direction !== 'DOWN') {
                validPath.push('UP');
            }
            if (this.maze[enemyRow + 1][enemyCol] !== 1 && this.maze[enemyRow + 1][enemyCol] !== 6 && this.maze[enemyRow + 1][enemyCol] !== 7 && enemy.direction !== 'UP') {
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
    //:::::::::::::Andar:::::::::::::
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

    //:::::::::::Colisões reativas::::::::::::
    //Ativado quando player colidir com inimigo/armadilha
    damage(/*player, enemy*/) {
        this.physics.pause();
        this.player.setTint(0xff0000);
        this.gameOver();
    }
    //Ativado ao colidir com moeda
    getCoin(player, coin) {
        let a = coin.x;
        let b = coin.y;
        let emitter = this.particles.createEmitter({maxParticles: 15});
        emitter.setPosition(a, b);
        emitter.setSpeed(50);

        coin.disableBody(true, true);



        this.score += 10;
        this.scoreText.setText('Pontos: ' + this.score);

        this.qtdCoins -= 1
        if (this.qtdCoins == 0) {
            a = this.tileEnd.x;
            b = this.tileEnd.y;
            emitter = this.blockParticle.createEmitter({maxParticles: 50});
            emitter.setPosition(a, b);
            emitter.setSpeed(50);
            this.tileEnd.disableBody(true);
            this.tileEnd.setVisible(false)
        }
    }
    //Ativado quando player colidir com arma
    getWeapon(player, weapon) {
        weapon.disableBody(true, true);
        this.getWeaponObject.setVisible(false);
        this.weaponButton.setVisible(true);
        this.amunitionBulletText.setVisible(true);
    }
    //Ao acertar bala no inimigo
    hitShot(bullet, enemy) {
        let x = enemy.x;
        let y = enemy.y;
        let emitter = this.blood.createEmitter({maxParticles: 15});
        emitter.setPosition(x, y);
        emitter.setSpeed(50);

        enemy.disableBody(true, true);
        bullet.disableBody(true, true);
        bullet.setActive(true);

        this.score += 20;
        this.scoreText.setText('Pontos: ' + this.score);

        this.enemyPosition -= 1;
        //somente para fase 3
        if (this.isStage3) {
            if (this.enemyPosition === 0) {
                x = this.tombFinal.x;
                y = this.tombFinal.y;
                emitter = this.tombFinalParticle.createEmitter({maxParticles: 50});
                emitter.setPosition(x, y);
                emitter.setSpeed(50);
                
                this.tombFinal.disableBody(true);
                this.tombFinal.setVisible(false)
            }
        }
    }
    //Sumir com a bala ao atirar contra o bloco
    missedShot(bullet, tile) {
        bullet.disableBody(true, true);
        bullet.setActive(true);
    }

    //Uma bala a menos ao atirar
    oneBulletLess(button) {
        this.amunitionBullet -= 1;

        if (this.amunitionBullet === 1) {
            this.amunitionBulletText.setText('Municao: ' + this.amunitionBullet + ' bala');
        }
        else {
            this.amunitionBulletText.setText('Municao: ' + this.amunitionBullet + ' balas');
        }

        if (this.amunitionBullet === 0) {
            button.setVisible(false);
            this.amunitionBulletText.setVisible(false);
            this.noBullets.setVisible(true);
        }
    }

    //Ativar botão para desativar armadilhas
    getLever(player, lever) {
        lever.disableBody(true, true);
        this.leverButton.setVisible(true);
        this.c += 30;

    }
    //Destruir as tumbas
    destroyTomb(tomb){
            let x = tomb.x;
            let y = tomb.y;
            let emitter = this.tombParticle.createEmitter({maxParticles: 50});
            emitter.setPosition(x, y);
            emitter.setSpeed(50);

            tomb.destroy();
    }
    //game over
    gameOver() {
        currentScore = 0
        this.scene.start('gameOver');
    }
    //passou de fase
    callNextStage() {
        this.timedEvent.remove();
        //this.tempo = this.c;
        currentScore = this.score + this.c;

        this.Congratulationtext = this.add.text(this.game.renderer.width/2, 200, 'Parabens!', {font: '35px emulogic', fill: '#ffffff'})
        .setOrigin(0.5);
        if(this.isStage3){
            this.gameObjective.destroy();
            this.nextStageText = this.add.text((this.game.renderer.width/2)+10, 250, 'Voce consegui salvar Juliel!', {font: '20px emulogic', fill: '#ffffff'})
            .setOrigin(0.5);
            this.ScoreFinalStageText = this.add.text(this.game.renderer.width/2, 300, 'Pontuacao Final: '+ currentScore, {font: '20px emulogic', fill: '#ffffff'})
            .setOrigin(0.5);
        }
        else{
            this.nextStageText = this.add.text((this.game.renderer.width/2)+10, 250, 'Voce avancou para o proximo labirinto', {font: '20px emulogic', fill: '#ffffff'})
            .setOrigin(0.5);
            this.ScoreFinalStageText = this.add.text(this.game.renderer.width/2, 300, 'Pontuacao: '+ currentScore, {font: '20px emulogic', fill: '#ffffff'})
            .setOrigin(0.5);
        }
        
        this.time.addEvent({ delay: 4000, callback: this.callNextScene, callbackScope: this, loop: false })
        if (this.enemies.getLength() > 0) {
            for (let a = 0; a < this.enemies.getLength(); a++) {
                this.groupEnemies[a].disableBody(true, true);
            }
        }
        this.joyStick.setVisible(false)
        this.player.disableBody(true, true);
        
    }

}
movimentBullet = 'down';