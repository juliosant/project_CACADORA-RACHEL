class OptionScene extends Phaser.Scene{
    create(){

        this.quitButton = this.add.text(this.game.renderer.width/2, 490, '{QUIT}', {font: '18px emulogic', fill: '#f7f2ad'})
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
            this.scene.start('menu');
        }, this);
    }

}

