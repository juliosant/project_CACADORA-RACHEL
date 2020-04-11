class BootScene extends Phaser.Scene {
    create(){
        this.scene.add('boot', BootScene);
        this.scene.add('load', LoadScene);
        this.scene.add('menu', MenuScene);
        this.scene.add('stage1', Stage1);
        this.scene.add('credits', CreditsScene);
        this.scene.add('option', OptionScene);

        this.scene.start('load');
    }
    
}

var config = {
    type: Phaser.AUTO,
    width: 1024,
    height: 525,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scene: BootScene,

};
var game = new Phaser.Game(config);
