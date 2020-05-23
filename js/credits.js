class CreditsScene extends Phaser.Scene{
    create(){
        this.sndCredits = this.sound.add('sndMenu');
        this.sndCredits.loop = true;
        this.sndCredits.play();

        this.credits =  this.add.text(this.game.renderer.width/2, 50, 'Creditos', {font: '25px emulogic', fill: '#f7f2ad'})
        .setOrigin(0.5);
        this.textCreator =  this.add.text(this.game.renderer.width/2, 130, 'Inspirado em uma garota da Uni7', {font: '25px emulogic', fill: '#555577'})
        .setOrigin(0.5);
        this.textCreator =  this.add.text(this.game.renderer.width/2, 180, 'Creditada como R.F.F.', {font: '25px emulogic', fill: '#555577'})
        .setOrigin(0.5);

        this.textCreator =  this.add.text(150, 230, 'Desenvolvedor:', {font: '10px emulogic', fill: '#ff5500'});
        this.textCreator =  this.add.text(150, 230, '\n\nJulio Santiago', {font: '10px emulogic', fill: '#f7f2ad'});

        this.textCreator =  this.add.text(350, 230, 'Linguagem Base:', {font: '10px emulogic', fill: '#ff5500'});
        this.textCreator =  this.add.text(350, 230, '\n\nPhaser\n\n(JavaScript)', {font: '10px emulogic', fill: '#f7f2ad'});

        this.textCreator =  this.add.text(550, 230, 'Imagems:', {font: '10px emulogic', fill: '#ff5500'});
        this.textCreator =  this.add.text(550, 230, '\n\nopengameart.org/\n\nJulio Santiago', {font: '10px emulogic', fill: '#f7f2ad'});

        this.textCreator =  this.add.text(750, 230, 'Audio:', {font: '10px emulogic', fill: '#ff5500'});
        this.textCreator =  this.add.text(750, 230, '\n\nfreesfx.co.uk/\n\nfesliyanstudios.com\n\nfreesound.org\n\nMusic: Eric Skiff', {font: '10px emulogic', fill: '#f7f2ad'});

        this.textCreator =  this.add.text(900, 380, 'Versao:', {font: '10px emulogic', fill: '#ff5500'});
        this.textCreator =  this.add.text(900, 380, '\n\n 0.1.0', {font: '10px emulogic', fill: '#f7f2ad'});

        this.textCreator =  this.add.text(this.game.renderer.width/2, 340, 'TODOS OS ARQUIVOS FORAM DISPONIBILIZADOS GRATUITAMENTE', {font: '8px emulogic', fill: '#aa5555'})
        .setOrigin(0.5);
        this.textCreator =  this.add.text(this.game.renderer.width/2, 350, 'OBEDECENDO AS NORMAS DE USO!', {font: '8px emulogic', fill: '#aa5555'})
        .setOrigin(0.5);

        this.textCreator =  this.add.text(this.game.renderer.width/2, 430, '-------------------------------------', {font: '25px emulogic', fill: '#f7f2ad'})
        .setOrigin(0.5);
        this.textCreator =  this.add.text(this.game.renderer.width/2, 450, '2020', {font: '10px emulogic', fill: '#f7f2ad'})
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