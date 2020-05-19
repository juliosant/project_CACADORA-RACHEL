class InitialPresentation extends Phaser.Scene{
    create(){
        this.introductoryText = this.add.text(this.game.renderer.width/2, 150, "Rachel! Juliel foi raptada e",
        {font: '30px emulogic', fill: '#f7f2ad'}).setOrigin(0.5);
        this.introductoryText = this.add.text(this.game.renderer.width/2, 200, "Levada ate o Cemiterio.",
        {font: '30px emulogic', fill: '#f7f2ad'}).setOrigin(0.5);
        this.introductoryText = this.add.text(this.game.renderer.width/2, 250, "Chegue ate la",
        {font: '30px emulogic', fill: '#f7f2ad'}).setOrigin(0.5);
        this.introductoryText = this.add.text(this.game.renderer.width/2, 300, "Para poder salva-la.",
        {font: '30px emulogic', fill: '#f7f2ad'}).setOrigin(0.5);

        this.buttonForPlay = this.add.text(700, 450, "[Continuar]", {font: '20px emulogic', fill: '#f7f2ad'}).setInteractive();

        this.buttonForPlay.once('pointerdown', function(pointer){
            this.buttonForPlay.setTintFill(0xcf70cf);
            this.time.addEvent({delay: 1000, callback: this.callGame, callbackScope: this, loop: false});
        }, this);

        this.add.sprite(200, 400,'player').setScale(1.5)
        this.add.sprite(700, 400,'enemy').setScale(1.5)
        this.add.sprite(800, 400,'enemy').setScale(1.5)
    }
    callGame(){
        this.scene.start('stage1');
    }

}