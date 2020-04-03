class Stage1 extends Phaser.Scene {

    create() {
        this.add.image(375, 250, 'bg');

        this.maze = [


            /* 1: local onde ficará os blocos
               2: Local onde Rachel começará a fase
               3: local onde estará as moedas.
               4: Local onde Rachel encerrará a fase.
               5: local onde estará a arma de Rachel
           */


            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [2, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1],
            [1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1],
            [1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
            [1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1],
            [1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1],
            [1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1],
            [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 4, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1],
            [1, 0, 1, 1, 1, 3, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1],
            [1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        ]
        this.platforms = this.physics.add.staticGroup();

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
                    this.player.setBounce(1);
                    this.player.setCollideWorldBounds(true);

                    //animar para a esquerda
                    this.anims.create({
                        key: 'left',
                        frames: this.anims.generateFrameNumbers('player', { start: 16, end: 23 }),
                        frameRate: 10,
                        repeat: -1
                    });
                    //animar para a direita
                    this.anims.create({
                        key: 'right',
                        frames: this.anims.generateFrameNumbers('player', { start: 24, end: 31 }),
                        frameRate: 10,
                        repeat: -1

                    });
                    //animar para a cima
                    this.anims.create({
                        key: 'up',
                        frames: this.anims.generateFrameNumbers('player', { start: 8, end: 15 }),
                        frameRate: 10,
                        repeat: -1

                    });
                    //animar para a baixo
                    this.anims.create({
                        key: 'down',
                        frames: this.anims.generateFrameNumbers('player', { start: 0, end: 7 }),
                        frameRate: 10,
                        repeat: -1
                    });
                }

                //::::::::::::::::::::::::::::::CRIANDO MOEDA::::::::::::::::::::::::::::::
                else if (this.tile === 3) {
                    this.coins = this.physics.add.sprite(x + 12.5, y + 12.5, 'coin');
                    this.anims.create({
                        key: 'gira-gira',
                        frames: this.anims.generateFrameNumbers('coin', { start: 0, end: 9 }),
                        frameRate: 10,
                        repeat: -1,
                    });
                }

                //::::::::::::::::::::::::::::::CRIANDO INIMIGO::::::::::::::::::::::::::::::
                
                else if (this.tile === 4) {
                    this.enemy = this.physics.add.sprite(x + 12.5, y + 12.5, 'enemy');
                    this.enemy.setCollideWorldBounds(true);
                    this.anims.create({
                        key: 'goLeft',
                        frames: this.anims.generateFrameNumbers('enemy', { start: 16, end: 23 }),
                        frameRate: 10,
                        repeat: -1,
                    });
                    this.anims.create({
                        key: 'goRight',
                        frames: this.anims.generateFrameNumbers('enemy', { start: 24, end: 31 }),
                        frameRate: 10,
                        repeat: -1
                    });
                    this.anims.create({
                        key: 'goUp',
                        frames: this.anims.generateFrameNumbers('enemy', { start: 8, end: 15 }),
                        frameRate: 10,
                        repeat: -1
                    });
                    this.anims.create({
                        key: 'goDown',
                        frames: this.anims.generateFrameNumbers('enemy', { start: 0, end: 7 }),
                        frameRate: 10,
                        repeat: -1
                    });
                    this.enemy.direction = "DOWN";
                }
                //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
                //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
            }
        }

        //TEXTO DE HP E VIDA
        this.score = 0;
        this.scoreText = this.add.text(25, 500, 'Score: ' + this.score, { fontSize: '20px', fill: '#ffa' });
        this.hp = 200;
        this.hpText = this.add.text(250, 500, 'Hp: ' + this.hp, { fontSize: '20px', fill: '#ffa' });

        //COLISÕES
        this.physics.add.collider(this.player, this.platforms);
        this.physics.add.collider(this.enemy, this.platforms)
        this.physics.add.overlap(this.player, this.coins, this.pegaMoeda, null, this);
        this.physics.add.overlap(this.player, this.enemy, this.tomaDano, null, this);

        //ADD MOVIMENTAÇÃO
        this.cursors = this.input.keyboard.createCursorKeys();


    }


    update() {
        //::::::::::::::::::::ANIMAÇÃO DA MOEDA::::::::::::::::::::
        if (this.coins.setVelocityX(0) && this.coins.setVelocityY(0)) {
            this.coins.anims.play('gira-gira', true);
        }

        //::::::::::::::::::::ANIMAÇÃO DA INIMIGO::::::::::::::::::::
        if (Math.floor(this.enemy.x - 12.5) % 25 === 0 && Math.floor(this.enemy.y - 12.5) % 25 === 0) {
            var enemyCol = Math.floor(this.enemy.x / 25);
            var enemyRow = Math.floor(this.enemy.y / 25);
            var validPath = [];

            if (this.maze[enemyRow][enemyCol - 1] !== 1 && this.enemy.direction !== 'RIGHT') {
                validPath.push('LEFT');
            }
            if (this.maze[enemyRow][enemyCol + 1] !== 1 && this.enemy.direction !== 'LEFT') {
                validPath.push('RIGHT');
            }
            if (this.maze[enemyRow - 1][enemyCol] !== 1 && this.enemy.direction !== 'DOWN') {
                validPath.push('UP');
            }
            if (this.maze[enemyRow + 1][enemyCol] !== 1 && this.enemy.direction !== 'UP') {
                validPath.push('DOWN');
            }

            this.enemy.direction = validPath[Math.floor(Math.random() * validPath.length)];
        }

        switch (this.enemy.direction) {
            case 'LEFT':
                this.enemy.x -= 1;
                this.enemy.anims.play('goLeft', true);
                break;
            case 'RIGHT':
                this.enemy.x += 1;
                this.enemy.anims.play('goRight', true);
                break;
            case 'UP':
                this.enemy.y -= 1;
                this.enemy.anims.play('goUp', true)
                break;
            case 'DOWN':
                this.enemy.y += 1;
                this.enemy.anims.play('goDown', true)
                break;

        }

        //::::::::::::::::::::ANIMAÇÃO DO PLAYER::::::::::::::::::::
        this.player.setVelocityX(0);
        this.player.setVelocityY(0);


        if (this.cursors.left.isDown && !this.cursors.right.isDown) {
            this.player.setVelocityX(-80);
            this.player.anims.play('left', true);
        }

        else if (this.cursors.right.isDown && !this.cursors.left.isDown) {
            this.player.setVelocityX(80);
            this.player.anims.play('right', true);
        }

        else if (this.cursors.up.isDown & !this.cursors.down.isDown) {
            this.player.setVelocityY(-80);
            this.player.anims.play('up', true);
        }

        else if (this.cursors.down.isDown && !this.cursors.up.isDown) {
            this.player.setVelocityY(80);
            this.player.anims.play('down', true);
        }

        else if (this.player.setVelocityX(0) && this.player.setVelocityY(0)) {
            this.player.anims.stop('up', true);
        }


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
}