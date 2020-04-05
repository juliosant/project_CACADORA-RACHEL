var moviment;
var angle;
var force;
class Stage1 extends Phaser.Scene {


    create() {

        this.add.image(575, 275, 'bg');

        this.maze = [


            /*  1: local onde ficará os blocos
               2: Local onde Rachel começará a fase
               3: local onde estará as moedas.
               4: Local onde Rachel encerrará a fase.
               5: local onde estará a arma de Rachel
           */

            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1],
            [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1],
            [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1],
            [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
            [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1],
            [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1],
            [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1],
            [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1],
            [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1],
            [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1],
            [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 4, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1],
            [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 3, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1],
            [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1],
            [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1],
            [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
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
                    //:::::::::::::::::::::::::::::::::::::::::::

                    //:::::::::::::::::::::::::::::::::::::::::::
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
        this.scoreText = this.add.text(225, 10, 'Score: ' + this.score, { font: '12px emulogic', fill: '#ffa' });
        this.hp = 200;
        this.hpText = this.add.text(450, 10, 'Hp: ' + this.hp, { font: '12px emulogic', fill: '#ffa' });

        //COLISÕES
        this.physics.add.collider(this.player, this.platforms);
        this.physics.add.collider(this.enemy, this.platforms)
        this.physics.add.overlap(this.player, this.coins, this.pegaMoeda, null, this);
        this.physics.add.overlap(this.player, this.enemy, this.tomaDano, null, this);

        //ADD MOVIMENTAÇÃO
        this.cursors = this.input.keyboard.createCursorKeys();

        //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        /*this.input.addPointer(1000);


        this.leftBtn = this.add.image(600, 512.5, 'left').setScrollFactor(0).setInteractive();
        this.rightBtn = this.add.image(525, 512.5, 'right').setScrollFactor(0).setInteractive();
        this.upBtn = this.add.image(450, 512.5, 'up').setScrollFactor(0).setInteractive();
        this.downBtn = this.add.image(375, 512.5, 'down').setScrollFactor(0).setInteractive();*/

         this.joyStick = this.plugins.get('rexvirtualjoystickplugin').add(this, {
                     x: 100,
                     y: 225,
                     radius: 50,
                     base: this.add.circle(0, 0, 100, 0x888888),
                     thumb: this.add.circle(0, 0, 50, 0xcccccc),
                     // dir: '8dir',   // 'up&down'|0|'left&right'|1|'4dir'|2|'8dir'|3
                     // forceMin: 16,
                     // enable: true
                 })
                 .on('update', this.dumpJoyStickState, this);
     
             this.text = this.add.text(0, 0);
             this.dumpJoyStickState();
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
             force =  Math.floor(this.joyStick.force * 100) / 100;
             angle = Math.floor(this.joyStick.angle * 100) / 100;
            // s += '\n';
             //s += ('Force: ' + force + '\n');
            //s += ('Angle: ' + angle + '\n');

             if (force ===0 && angle === 0){
                 moviment = null;
             }
             this.text.setText(s);

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
        else if(force === 0 && angle === 0){
            this.player.setVelocityX(0);
            this.player.setVelocityY(0);
            this.player.anims.stop('up', true);
        }


     /*   this.leftBtn.once('pointerdown', function () {
            this.goLeft();
        }, this);

        this.rightBtn.once('pointerdown', function () {
            this.goRight();
        }, this);

        this.upBtn.once('pointerdown', function () {
            this.goUp();
        }, this);

        this.downBtn.once('pointerdown', function () {
            this.goDown();
        }, this);*/

    }


    goLeft() {
        this.player.setVelocityX(-80);
        this.player.anims.play('left', true);
    }
    goRight() {
        this.player.setVelocityX(80);
        this.player.anims.play('right', true);
    }
    goUp() {
        this.player.setVelocityY(-80);
        this.player.anims.play('up', true);
    }
    goDown() {
        this.player.setVelocityY(80);
        this.player.anims.play('down', true);
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
