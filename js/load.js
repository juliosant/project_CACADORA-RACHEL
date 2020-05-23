class LoadScene extends Phaser.Scene {
    preload() {

        //:::::::::::::::Carregar imagens e sprites:::::::::::::::::::::
        this.load.image('bg-control', 'assets/bg-control.png');
        this.load.image('bg-button', 'assets/bg-button.png');

        this.load.image('bgStage1', 'assets/bgStage1.png');
        this.load.image('blockStage1', 'assets/blockStage1.png');
        this.load.image('introductionStage1','assets/Stage1Introduction.png');

        this.load.image('bgStage2', 'assets/bgStage2.png');
        this.load.image('blockStage2', 'assets/blockStage2.png');
        this.load.image('introductionStage2','assets/Stage2Introduction.png');
        this.load.image('spike-ball', 'assets/spike-ball.png');

        this.load.image('bgStage3', 'assets/bgStage3.png');
        this.load.image('blockStage3', 'assets/blockStage3.png');
        this.load.image('introductionStage3', 'assets/Stage3Introduction.png');
        this.load.image('tomb', 'assets/tomb.png');
        this.load.image('tombFinal', 'assets/tombFinal.png');
        this.load.image('lever', 'assets/lever.png');
        this.load.image('objective', 'assets/objective.png');

        this.load.image('blockend', 'assets/blockSkullEnd.png');

        this.load.image('particles', 'assets/particle.png');
        this.load.image('blood', 'assets/bloodParticle.png');
        this.load.image('blockParticle', 'assets/tileEndParticle.png');
        this.load.image('tombFinalParticle', 'assets/tombFinalParticle.png');
        this.load.image('tombParticle', 'assets/tombParticle.png');

        this.load.image('ammunition', 'assets/ammunition.png');
        this.load.image('weapon', 'assets/weapon.png');
        this.load.image('weaponButton', 'assets/button.png');
        this.load.image('leverButton', 'assets/leverButton.png');

        //this.load.image('progressbar', 'assets/progressbar.png');
        this.load.image('juliel', 'assets/Juliel.png');
        this.load.image('rachel', 'assets/Rachel.png');
        this.load.image('monster', 'assets/Monster.png')
        
        this.load.spritesheet('player', 'assets/player.png', { frameWidth: 20, frameHeight: 25 });
        this.load.spritesheet('enemy', 'assets/enemy.png', { frameWidth: 20, frameHeight: 25 });
        this.load.spritesheet('coin', 'assets/coin.png', { frameWidth: 25, frameHeight: 25 });
        
        this.load.image('keyboardGame', 'assets/keyboard.png');
        this.load.image('joystick', 'assets/joystick.png');

        //:::::::::::::::Carregar imagens e sprites:::::::::::::::::::::
        this.load.audio('sndMenu', 'snd/menu.mp3');
        this.load.audio('sndStoryScene', 'snd/storyGame.mp3');
        //this.load.audio('sndPresentation', 'snd/presentation.mp3');
        /*this.load.audio('sndStage1', 'snd/stage1.mp3');
        this.load.audio('sndStage2', 'snd/stage2.mp3');
        this.load.audio('sndStage3', 'snd/stage3.mp3');*/
        /*this.load.audio('victory', 'snd/victory.mp3');
        this.load.audio('getCoin','snd/get_Coin.mp3');
        this.load.audio('shoot', 'snd/shoot.mp3');
        this.load.audio('explosion', 'snd/explosion.mp3');*/
        //this.load.audio('sndGameOver','snd/game_Over.mp3');

        //:::::::::::::::Carregar plugin para controle:::::::::::::::::::::
        var url;
            url = 'js/rexvirtualjoystickplugin.min.js';
             this.load.plugin('rexvirtualjoystickplugin', url, true);
        
        var movimentBullet; //armazenar direção da bala
    }
    create(){
        this.scene.start('menu');
    }
}