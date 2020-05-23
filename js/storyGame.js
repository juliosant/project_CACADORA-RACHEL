class StoryGameScene extends Phaser.Scene{
    preload(){
        this.load.audio('sndStoryScene', 'snd/storyGame.mp3');
    }
    
    create(){
        this.sndStory = this.sound.add('sndStoryScene');
        this.sndStory.loop = true;
        this.sndStory.play();

        this.add.image(this.game.renderer.width/2, this.game.renderer.height/2, 'bgStage2')
        .setScale(1.5)
        /*.setTintFill(0x333333)*/;

        this.info =  this.add.text(this.game.renderer.width/2, 50, 'Historia', {font: '25px emulogic', fill: '#f7f2ad'})
        .setOrigin(0.5);

        this.storytext = this.add.text(50, 130, 
        'Acompanhe Rachel Formignolli Ferrara, uma sargento das forcas armadas \nque tem sua amiga Juliel Saint-Ana raptada para sacrifício por uma \nseita do deus Ahura que foi morto por outros deuses muito tempos \natrás e seu corpo selado no Cemitério, na Tumba Branca Amaldiçoada.'+
        '\n\nPara não desaparecer, o espirito de Ahura se dividiu e encarnou em \nvárias criaturas, conhecidas agora como os monstros encapuzados.'+
        '\n\nPara seu espirito voltar ao corpo original, precisaria de sacrifício \nde um humano puro e íntegro. A jovem Juliel então foi a escolhida e \nraptada para a liturgia.'+
        '\n\nRachel que estava descansando na floresta se deparou com algumas \ndessas criaturas encapuzadas e descobriu que Juliel foi raptada. \nAgora começaria a caçada para salvar sua amiga.',
        {font: '22px', fill: '#aaaaaa'})
        .setAlign('justify')
        .setInteractive();

        

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
            this.sndStory.stop();
            this.time.addEvent({delay: 500, callback: this.backToInfo, callbackScope: this});
        }, this);
    }

    backToInfo(){
        this.scene.start('info')
    }
}