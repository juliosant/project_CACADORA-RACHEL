class FinalScene extends Phaser.Scene {
    create() {
        this.finalText1 = this.add.text(this.game.renderer.width / 2, 200,
            "Voce conseguiu salvar Juliel!",
            { font: '23px emulogic', fill: '#f7f2ad' }).setOrigin(0.5);

        this.finalText2 = this.add.text(this.game.renderer.width / 2, 250,
            "Chegamos ao fim desta jornada. Parabens!",
            { font: '23px emulogic', fill: '#f7f2ad' }).setOrigin(0.5);

        this.time.addEvent({ delay: 4000, callback: this.ThankYouRachel, callbackScope: this, loop: false });

        this.add.sprite(495, 400, 'rachel').setScale(0.7);;
        this.add.image(525, 403, 'juliel').setScale(0.7);

        if(currentScore > highScore){
            highScore = currentScore;
            this.recordText = this.add.text(this.game.renderer.width / 2, 475,'Voce eh o novo recordista com '+ currentScore + 'pts',
            { font: '15px emulogic', fill: '#ff55AA' }).setOrigin(0.5);
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
        this.time.addEvent({ delay: 20000, callback: this.callBackToMenu, callbackScope: this, loop: false });

    }

    callBackToMenu(){
        this.scene.start('menu');
    }

}