var config = {
    type: Phaser.AUTO,
    width: 750,
    height: 550,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var tile;

var platforms;

var player;
var cursor;

var coins;

var score = 0;
var scoreText;

var game = new Phaser.Game(config);

function preload() {
    this.load.image('bg', 'assets/bg.png');
    this.load.image('block', 'assets/block.png');

    this.load.image('end', 'assets/end.png');
    this.load.image('part', 'assets/part.png');
    this.load.image('progressbar', 'assets/progressbar.png');


    this.load.spritesheet('player', 'assets/player.png', { frameWidth: 20, frameHeight: 20 });
    this.load.spritesheet('enemy', 'assets/enemy.png', { frameWidth: 20, frameHeight: 20 });
    this.load.spritesheet('coin', 'assets/coin.png', { frameWidth: 25, frameHeight: 25 })
}

function create() {
    this.add.image(375, 250, 'bg');

    this.maze = [


        /*  1: local onde ficará os blocos
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
    platforms = this.physics.add.staticGroup();

    for (var row in this.maze) {
        for (var col in this.maze[row]) {
            tile = this.maze[row][col]

            var x = col * 25;
            var y = row * 25;

            if (tile === 1) {
                platforms.create(x + 12.5, y + 12.5, 'block');
            }

            else if (tile === 2) {
                player = this.physics.add.sprite(x + 12.5, y + 12.5, 'player');
                player.setBounce(1);
                player.setCollideWorldBounds(true);

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

            else if (tile === 3) {
                coins = this.physics.add.sprite(x + 12.5, y + 12.5, 'coin');
                this.anims.create({
                key: 'gira-gira',
                frames: this.anims.generateFrameNumbers('coin', {start:0, end: 9}),
                frameRate: 10,
                repeat: -1,
            });
            }
            else if (tile === 3) {
                coins = this.physics.add.sprite(x + 12.5, y + 12.5, 'coin');
                this.anims.create({
                    key: 'gira-gira',
                    frames: this.anims.generateFrameNumbers('coin', {start:0, end: 9}),
                    frameRate: 10,
                    repeat: -1,
                });
                

            }
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
            else if (tile === 4) {
                enemy = this.physics.add.sprite(x + 12.5, y + 12.5, 'enemy');
                enemy.setCollideWorldBounds(true);
                this.anims.create({
                    key: 'goLeft',
                    frames: this.anims.generateFrameNumbers('enemy', {start:16, end: 23}),
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
                enemy.direction = "DOWN";
            }
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        }
    }

    scoreText = this.add.text(25, 500, 'Score: 0', { fontSize: '20px', fill: '#ffa' });

    //Colisões:
    this.physics.add.collider(player, platforms);
    this.physics.add.collider(enemy, platforms)
    this.physics.add.overlap(player, coins, pegaMoeda, null, this);

    //preenche o objeto de cursores com 4 propriedades: up, down, left, right
    cursors = this.input.keyboard.createCursorKeys();
  
    
}


function update() {
//::::::::::::::::::::ANIMAÇÃO DA MOEDA::::::::::::::::::::
    if (coins.setVelocityX(0) && coins.setVelocityY(0)){
        coins.anims.play('gira-gira', true);
    }

//::::::::::::::::::::ANIMAÇÃO DA INIMIGO::::::::::::::::::::

    if(Math.floor(enemy.x -12.5)%25 === 0 && Math.floor(enemy.y -12.5)%25 === 0){
        var enemyCol = Math.floor(enemy.x/25);
        var enemyRow = Math.floor(enemy.y/25);
        //alert(this.maze[enemyRow][enemyCol]);
        var validPath = [];

        if(this.maze[enemyRow][enemyCol-1] !== 1 && enemy.direction !== 'RIGHT'){
            validPath.push('LEFT');
        }
        if(this.maze[enemyRow][enemyCol+1] !== 1 && enemy.direction !== 'LEFT'){
            validPath.push('RIGHT');
        }
        if(this.maze[enemyRow-1][enemyCol] !== 1 &&  enemy.direction !== 'DOWN'){
            validPath.push('UP');
        }
        if(this.maze[enemyRow+1][enemyCol] !== 1 && enemy.direction !== 'UP'){
            validPath.push('DOWN');
        }
        
        enemy.direction = validPath[Math.floor(Math.random()*validPath.length)];
    }
        
    switch(enemy.direction){
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

    


//::::::::::::::::::::ANIMAÇÃO DO PLAYER::::::::::::::::::::
    player.setVelocityX(0);
    player.setVelocityY(0);


    if (cursors.left.isDown && !cursors.right.isDown) {
        player.setVelocityX(-80);
        player.anims.play('left', true);
    }

    else if (cursors.right.isDown && !cursors.left.isDown) {
        player.setVelocityX(80);
        player.anims.play('right', true);
    }

    else if (cursors.up.isDown & !cursors.down.isDown) {
        player.setVelocityY(-80);
        player.anims.play('up', true);
    }

    else if (cursors.down.isDown && !cursors.up.isDown) {
        player.setVelocityY(80);
        player.anims.play('down', true);
    }

    else if (player.setVelocityX(0) && player.setVelocityY(0)) {
        player.anims.stop('up', true);
    }

    
}

function pegaMoeda(player, coin)
{
    coin.disableBody(true,true);

    score += 10;
    scoreText.setText('Score: ' + score);
}
