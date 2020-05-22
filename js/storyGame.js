class StoryGameScene extends Phaser.Scene{
    create(){
        this.info =  this.add.text(this.game.renderer.width/2, 50, 'Historia', {font: '25px emulogic', fill: '#f7f2ad'})
        .setOrigin(0.5);

        this.quitButton = this.add.text(this.game.renderer.width/2, 490, '{VOLTAR PARA INFO}', {font: '18px emulogic', fill: '#f7f2ad'})
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
            this.time.addEvent({delay: 500, callback: this.backToInfo, callbackScope: this});
        }, this);
    }

    backToInfo(){
        this.scene.start('info')
    }
}