class BootScene extends Phaser.Scene {

    create() {
        this.add.text(0, 0, 'Click para começar o jogo');

        this.input.once('pointerdown', function () {
            
            this.scene.add('load', LoadScene, true);

        }, this);
    }

}

var config = {
    type: Phaser.AUTO,
    width: 750,
    height: 550,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scene: BootScene

};
var game = new Phaser.Game(config);