class CreditsScene extends Phaser.Scene{
    create(){
        this.sndCredits = this.sound.add('sndMenu');
        this.sndCredits.loop = true;
        this.sndCredits.play();

        this.credits =  this.add.text(this.game.renderer.width/2, 50, 'Creditos', {font: '25px emulogic', fill: '#f7f2ad'})
        .setOrigin(0.5);
        this.textCreator =  this.add.text(this.game.renderer.width/2, 150, 'Inspirado em uma garota da Uni7', {font: '25px emulogic', fill: '#ff55aa'})
        .setOrigin(0.5);
        this.textCreator =  this.add.text(this.game.renderer.width/2, 200, 'Creditada como R.F.F.', {font: '25px emulogic', fill: '#ff55aa'})
        .setOrigin(0.5);
        this.textCreator =  this.add.text(this.game.renderer.width/2, 235, '----------------------------', {font: '25px emulogic', fill: '#f7f2ad'})
        .setOrigin(0.5);
        this.textCreator =  this.add.text(this.game.renderer.width/2, 270, 'Desenvolvimento: Julio Victor Santiago', {font: '18px emulogic', fill: '#f7f2ad'})
        .setOrigin(0.5);
        this.textCreator =  this.add.text(this.game.renderer.width/2, 300, 'Linguagem Base: Phaser (JavaScript)', {font: '18px emulogic', fill: '#f7f2ad'})
        .setOrigin(0.5);
        this.textCreator =  this.add.text(this.game.renderer.width/2, 330, 'Versao: 0.1.0', {font: '18px emulogic', fill: '#f7f2ad'})
        .setOrigin(0.5);
        this.textCreator =  this.add.text(this.game.renderer.width/2, 360, 'Ano: 2020', {font: '18px emulogic', fill: '#f7f2ad'})
        .setOrigin(0.5);
        
        
        this.quitButton = this.add.text(this.game.renderer.width/2, 490, '{VOLTAR}', {font: '18px emulogic', fill: '#f7f2ad'})
        .setOrigin(0.5).setInteractive();

        //:::::::::::::::::::::::::::::::::::::::::Colorir ao passar mouse:::::::::::::::::::::::::::::::::::::::::
        this.input.on('gameobjectover', function (pointer, gameObject) {
            gameObject.setTintFill(0xcf70cf);
        });
        this.input.on('gameobjectout', function (pointer, gameObject) {
            gameObject.clearTint();
        });

        //:::::::::::::::::::::::::::::::::::::::::Apertar botões do menu:::::::::::::::::::::::::::::::::::::::::
        this.quitButton.once('pointerdown', function () {
            this.quitButton.setTintFill(0xcf70cf);
            this.sndCredits.stop();
            this.time.addEvent({delay: 500, callback: this.backToMenu, callbackScope: this});
        }, this);
    }
    backToMenu(){
        this.scene.start('menu');
    }
}