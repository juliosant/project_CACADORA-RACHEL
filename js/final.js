class FinalScene extends Phaser.Scene {
    create() {
        this.sndFinal = this.sound.add('sndFinal');
        this.sndFinal.loop = false;
        this.sndFinal.play();

        this.finalText1 = this.add.text(this.game.renderer.width / 2, 200,
            "Voce conseguiu salvar Juliel!",
            { font: '23px emulogic', fill: '#f7f2ad' }).setOrigin(0.5);

        this.finalText2 = this.add.text(this.game.renderer.width / 2, 250,
            "Chegamos ao fim desta jornada. Parabens!",
            { font: '23px emulogic', fill: '#f7f2ad' }).setOrigin(0.5);

        this.time.addEvent({ delay: 4000, callback: this.ThankYouRachel, callbackScope: this, loop: false });

        this.rachel = this.add.sprite(495, 400, 'rachel').setScale(0.7);;
        this.juliel = this.add.image(525, 403, 'juliel').setScale(0.7);
        
        this.isRecordist = false
        if(currentScore > highScore){
            highScore = currentScore;
            this.recordText = this.add.text(this.game.renderer.width / 2, 475,'Voce eh o novo recordista com '+ currentScore + 'pts',
            { font: '15px emulogic', fill: '#ff55AA' }).setOrigin(0.5);
            this.isRecordist = true
        }

    }

    ThankYouRachel() {
        this.finalText1.destroy();
        this.finalText2.destroy();
        this.ThankYouRachelText = this.add.text(this.game.renderer.width / 2, this.game.renderer.height / 2,
            "Juliel:\n\nObrigado, Rachel! S2", { font: '23px emulogic', fill: '#f7f2ad' }).setOrigin(0.5);

        this.tween = this.tweens.add({
            targets: this.ThankYouRachelText,
            duration: 2000,
            ease: 'Linear',
            y: 200,
            yoyo: true,
            repeat: -1

        });
        this.time.addEvent({ delay: 10000, callback: this.endGame, callbackScope: this, loop: false });

    }
    endGame(){
        this.ThankYouRachelText.destroy();
        this.rachel.destroy();
        this.juliel.destroy();
        if(this.isRecordist){
            this.recordText.destroy()
        }

        this.endText = this.add.text(this.game.renderer.width / 2, this.game.renderer.height/2,
            "FIM!", { font: '37px emulogic', fill: '#f7f2ad' }).setOrigin(0.5);
        
            this.time.addEvent({ delay: 5000, callback: this.callBackToMenu, callbackScope: this, loop: false });

    }

    callBackToMenu(){
        this.sndFinal.stop();
        this.scene.start('menu');
    }

}