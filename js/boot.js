class BootScene extends Phaser.Scene {

    create() {
    
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        this.nameGame = this.add.text(512, 150, 'RACHEL HUNTER', {font: '32px emulogic', fill: '#ffa'});
        this.nameGame.setOrigin(0.5);

        this.textoInicial = this.add.text(512, 300, 'PRESSIONE ENTER', {font: '15px emulogic', fill: '#ffa'});
        this.textoInicial.setOrigin(0.5);
        
        //Para Desktop
        this.input.keyboard.on('keydown_ENTER', function () {
            
            this.scene.add('load', LoadScene, true);

        }, this);

        //Para Mobile
        this.input.once('pointerdown', function () {
        
            this.scene.add('load', LoadScene, true);

        }, this);
        
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
    scene: BootScene

};
var game = new Phaser.Game(config);
