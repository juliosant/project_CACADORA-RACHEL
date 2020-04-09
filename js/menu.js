class MenuScene extends Phaser.Scene {
    preload() {
        this.load.image('logo', 'assets/logo_image.png');
    }

    create() {
        this.input.addPointer();

        //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        this.logo = this.add.image(this.game.renderer.width / 2, 130, 'logo');
        this.logo.setTintFill(0xbf40bf, 0xbf40bf, 0xf7f2ad, 0xf7f2ad);
        
        this.playButton = this.add.text(this.game.renderer.width / 2, 300, '{PLAY}', { font: '37px emulogic', fill: '#f7f2ad' })
        .setOrigin(0.5).setInteractive();

        this.optionButton = this.add.text(this.game.renderer.width / 2, 350, '{OPTIONS}', { font: '18px emulogic', fill: '#f7f2ad' })
        .setOrigin(0.5).setInteractive();
        
        this.creditsButton = this.add.text(this.game.renderer.width / 2, 390, '{CREDITS}', { font: '18px emulogic', fill: '#f7f2ad' })
        .setOrigin(0.5).setInteractive();
       
        //:::::::::::::::::::::::::::::::::::::::::Colorir ao passar mouse:::::::::::::::::::::::::::::::::::::::::
        this.input.on('gameobjectover', function (pointer, gameObject) {
            gameObject.setTintFill(0xcf70cf);
        });
        this.input.on('gameobjectout', function (pointer, gameObject) {
            gameObject.clearTint();
        });

        //:::::::::::::::::::::::::::::::::::::::::Apertar botões do menu:::::::::::::::::::::::::::::::::::::::::
        this.playButton.once('pointerdown', function () {
            this.scene.start('stage1');
        }, this);

        this.optionButton.once('pointerdown', function () {
            this.scene.start('option');
        }, this);
        
        this.creditsButton.once('pointerdown', function () {
            this.scene.start('credits');
        }, this);

    }
    
}
