class GameOverScene extends Phaser.Scene{
    
    create(){
        this.sndGameOver = this.sound.add('sndGameOver');
        this.sndGameOver.loop = false;
        this.sndGameOver.play();

        this.gameOverText = this.add.text(this.game.renderer.width/2, 525, 'GAME OVER!', 
        {font: '37px emulogic', fill: '#f7f2ad'})
        .setOrigin(0.5);
        this.clock = 1;
        this.time.addEvent({delay: 15000, callback: this.backToMenu, callbackScope: this, loop: false});
        this.time.addEvent({delay: 2500, callback: this.gameOverMotive, callbackScope: this, loop: false});

        this.tween = this.tweens.add({
            targets: this.gameOverText,
            duration: 2000,
            ease: 'Linear',
            y: this.game.renderer.height/2,

        });
        
    }
    backToMenu(){
        this.clock--;
        if(this.clock === 0){
            this.sndGameOver.stop();
            this.scene.start('menu')
        }
    }
    gameOverMotive(){
        this.gameOverTextMotive = this.add.text(this.game.renderer.width/2, 350, textGameOverHere,
            {font: '20px emulogic', fill: '#f7f2ad'}).setOrigin(0.5);
    }
}