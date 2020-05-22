class MenuScene extends Phaser.Scene {
    preload() {
        this.load.image('logo', 'assets/logo_image.png');
    }

    create() {
        if(!localStorage.getItem('rachel_highScore')){
			localStorage.setItem('rachel_highScore',0);
		}
		
		if(highScore > localStorage.getItem('rachel_highScore')){
			localStorage.setItem('rachel_highScore', highScore);
		} else {
			highScore = localStorage.getItem('rachel_highScore');
		}
        this.input.addPointer();

        //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        this.logo = this.add.image(this.game.renderer.width / 2, 130, 'logo');
        this.logo.setTintFill(0xbf40bf, 0xbf40bf, 0xf7f2ad, 0xf7f2ad);
        
        this.playButton = this.add.text(this.game.renderer.width / 2, 300, '{PLAY}', { font: '37px emulogic', fill: '#f7f2ad' })
        .setOrigin(0.5).setInteractive();

        this.infoButton = this.add.text(this.game.renderer.width / 2, 350, '{INFO}', { font: '18px emulogic', fill: '#f7f2ad' })
        .setOrigin(0.5).setInteractive();
        
        this.creditsButton = this.add.text(this.game.renderer.width / 2, 390, '{CREDITOS}', { font: '18px emulogic', fill: '#f7f2ad' })
        .setOrigin(0.5).setInteractive();

        //:::::::::::::::::::::::::::::::::::::::::Exibir maior pontuação:::::::::::::::::::::::::::::::::::::::::
        this.txtHighScore = this.add.text(this.game.renderer.width / 2, 430, '->>> RECORDE:'+ highScore +' <<<-', { font: '20px emulogic', fill: '#f7f2ad' })
        .setOrigin(0.5);
        this.txtHighScore.setTintFill(0xf7f2ad, 0xf7f2ad, 0xbf40bf, 0xbf40bf);
       
        //:::::::::::::::::::::::::::::::::::::::::Colorir ao passar mouse:::::::::::::::::::::::::::::::::::::::::
        this.input.on('gameobjectover', function (pointer, gameObject) {
            gameObject.setTintFill(0xcf70cf);
        });
        this.input.on('gameobjectout', function (pointer, gameObject) {
            gameObject.clearTint();
        });

        //:::::::::::::::::::::::::::::::::::::::::Apertar botões do menu:::::::::::::::::::::::::::::::::::::::::
        this.playButton.once('pointerdown', function () {
            this.playButton.setTintFill(0xcf70cf);
            this.time.addEvent({delay: 1000, callback: this.startGame, callbackScope: this, loop: false});
        }, this);

        this.infoButton.once('pointerdown', function () {
            this.infoButton.setTintFill(0xcf70cf);
            this.time.addEvent({delay: 500, callback: this.openInfo, callbackScope: this, loop: false});
        }, this);
        
        this.creditsButton.once('pointerdown', function () {
            this.creditsButton.setTintFill(0xcf70cf);
            this.time.addEvent({delay: 500, callback: this.openCredits, callbackScope: this, loop: false});
        }, this);

    }
    startGame(){
        this.scene.start('presentation');
    }
    openInfo(){
        this.scene.start('info');
    }
    openCredits(){
        this.scene.start('credits');
    }
}

var highScore = 0;
var currentScore = 0;
