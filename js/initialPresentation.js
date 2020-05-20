class InitialPresentation extends Phaser.Scene {
    create() {
        this.introductoryText0 = this.add.text(this.game.renderer.width / 2, 150, "A Srta Juliel foi raptada e",
            { font: '25px emulogic', fill: '#f7f2ad' }).setOrigin(0.5);
        this.introductoryText1 = this.add.text(this.game.renderer.width / 2, 200, "Levada ate o Cemiterio para sacrificio.",
            { font: '25px emulogic', fill: '#f7f2ad' }).setOrigin(0.5);
        this.introductoryText2 = this.add.text(this.game.renderer.width / 2, 250, "Pelo amor dos deuses",
            { font: '25px emulogic', fill: '#f7f2ad' }).setOrigin(0.5);
        this.introductoryText3 = this.add.text(this.game.renderer.width / 2, 300, "Alguem ajude-a.",
            { font: '25px emulogic', fill: '#f7f2ad' }).setOrigin(0.5);

        this.buttonForNext = this.add.text(700, 450, "[Continuar]", { font: '20px emulogic', fill: '#f7f2ad' }).setInteractive();

        //this.add.sprite(200, 380,'rachel').setScale(0.5);
        this.monster1 = this.add.image(462, 380, 'monster').setScale(0.5);
        this.juliel = this.add.image(512, 400, 'juliel').setScale(0.5);
        this.monster2 = this.add.image(562, 380, 'monster').setScale(0.5);

        this.buttonForNext.once('pointerdown', function (pointer) {
            this.buttonForNext.setTintFill(0xcf70cf);
            this.time.addEvent({ delay: 1000, callback: this.Next, callbackScope: this, loop: false });
        }, this);


    }
    Next() {
        // this.scene.start('stage1');
        this.introductoryText0.destroy()
        this.introductoryText1.destroy()
        this.introductoryText2.destroy()
        this.introductoryText3.destroy()

        this.monster1.destroy()
        this.monster2.destroy()
        this.juliel.destroy()
        this.buttonForNext.destroy()

        this.introductoryText0 = this.add.text(this.game.renderer.width / 2, 200, " Sgt.Rachel Formignolli Ferrara,",
            { font: '25px emulogic', fill: '#f7f2ad' }).setOrigin(0.5);
        this.introductoryText0 = this.add.text(this.game.renderer.width / 2, 250, "Eh seu dever traze-la a salvo",
            { font: '25px emulogic', fill: '#f7f2ad' }).setOrigin(0.5);
        this.introductoryText0 = this.add.text(this.game.renderer.width / 2, 300, "Aventure-se comecando pela floresta!",
            { font: '25px emulogic', fill: '#f7f2ad' }).setOrigin(0.5);

        this.rachel = this.add.image(512, 400, 'rachel').setScale(0.5);

        this.buttonForPlay = this.add.text(700, 450, "[Comecar]", { font: '20px emulogic', fill: '#f7f2ad' }).setInteractive();

        this.buttonForPlay.once('pointerdown', function (pointer) {
            this.buttonForPlay.setTintFill(0xcf70cf);
            this.time.addEvent({ delay: 1000, callback: this.callGame, callbackScope: this, loop: false });
        }, this);
    }
    callGame() {
        this.scene.start('stage1');
    }

}