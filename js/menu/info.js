class InfoScene extends Phaser.Scene{
    create(){
        this.sndInfo = this.sound.add('sndMenu');
        this.sndInfo.loop = true;
        this.sndInfo.play();
        this.info =  this.add.text(this.game.renderer.width/2, 50, 'Informacoes', {font: '25px emulogic', fill: '#f7f2ad'})
        .setOrigin(0.5);
        this.infoControl =  this.add.text(150, 150, 'Informacoes de controle:', {font: '18px emulogic', fill: '#ff5500'})
        ;
        this.infoControl =  this.add.text(150, 200, 'Teclado: \n\ncontrole nas setas:', {font: '12px emulogic', fill: '#f7f2ad'});
        this.add.image(420, 220, 'keyboardGame').setScale(0.3);
        
        this.infoControl =  this.add.text(520, 200, 'Touchscreen: \n\ncontrole virtual \n\na esquerda', {font: '12px emulogic', fill: '#f7f2ad'});
        this.add.image(760, 220, 'joystick').setScale(0.4);
        
        this.storyGame =  this.add.text(150, 320, 'Historia do jogo:', {font: '18px emulogic', fill: '#ff5500'});

        this.storyGame =  this.add.text(150, 370, 'Acompanhe Rachel Formignolli Ferrara, uma sargento'
        +'\n\ndas forcas armadas...', {font: '12px emulogic', fill: '#f7f2ad'});
        
        this.storyGame =  this.add.text(400, 393, ' [Continuar lendo]', {font: '15px emulogic', fill: '#00aaff'})
        .setInteractive();
        

        this.quitButton = this.add.text(this.game.renderer.width/2, 490, '{VOLTAR}', {font: '18px emulogic', fill: '#f7f2ad'})
        .setOrigin(0.5).setInteractive();

        //:::::::::::::::::::::::::::::::::::::::::Colorir ao passar mouse:::::::::::::::::::::::::::::::::::::::::
        this.input.on('gameobjectover', function (pointer, gameObject) {
            gameObject.setTintFill(0xcf70cf);
        });
        this.input.on('gameobjectout', function (pointer, gameObject) {
            gameObject.clearTint();
        });

        //:::::::::::::::::::::::::::::::::::::::::Voltar ao menu:::::::::::::::::::::::::::::::::::::::::
        this.quitButton.once('pointerdown', function () {
            this.quitButton.setTintFill(0xcf70cf);
            this.sndInfo.stop();
            this.time.addEvent({delay: 500, callback: this.backToMenu, callbackScope: this});
        }, this);

        //:::::::::::::::::::::::::::::::::::::::::Lea a estória:::::::::::::::::::::::::::::::::::::::::
        this.storyGame.once('pointerdown', function () {
            this.storyGame.setTintFill(0xcf70cf);
            this.sndInfo.stop();
            this.time.addEvent({delay: 500, callback: this.readTheStory, callbackScope: this});
        }, this);
    }

    backToMenu(){
        this.scene.start('menu');
    }
    
    readTheStory(){
        this.scene.start('story')
    }

}

