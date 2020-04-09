class CreditsScene extends Phaser.Scene{
    create(){
        this.textCreator =  this.add.text(this.game.renderer.width/2, 300, 'Criado por: Julio Victor Santiago', {font: '18px emulogic', fill: '#f7f2ad'})
        .setOrigin(0.5);
        
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