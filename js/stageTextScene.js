class StageTextScene extends Phaser.Scene {
    preload(){
        this.load.audio('sndStage1', 'snd/stage1.mp3');
        this.load.audio('sndStage2', 'snd/stage2.mp3');
        this.load.audio('sndStage3', 'snd/stage3.mp3');
        this.load.audio('victory', 'snd/victory.mp3');
        this.load.audio('getCoin','snd/get_Coin.mp3');
        this.load.audio('shoot', 'snd/shoot.mp3');
        this.load.audio('explosion', 'snd/explosion.mp3');
    }
    create() {
        this.StageText = this.add.text(this.game.renderer.width / 2, this.game.renderer.height / 2, texPresnetationHere,
            {font: '37px emulogic', fill:'#f7f2ad'}).setOrigin(0.5);
        
        this.time.addEvent({delay: 2500, callback: this.nextScene, callbackScope: this, loop: false});
    }
    nextScene(){
        this.scene.start(textHere);
    }
}