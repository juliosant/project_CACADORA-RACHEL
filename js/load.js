class LoadScene extends Phaser.Scene {
    preload() {

        this.load.image('bg', 'assets/bg.png');
        this.load.image('bg-control', 'assets/bg-control.png');
        this.load.image('bg-button', 'assets/bg-button.png');
        this.load.image('block', 'assets/block.png');

        /*this.load.image('up', 'assets/block.png');
        this.load.image('down', 'assets/block.png');
        this.load.image('left', 'assets/block.png');
        this.load.image('right', 'assets/block.png');*/

        this.load.image('end', 'assets/end.png');
        this.load.image('part', 'assets/part.png');
        this.load.image('progressbar', 'assets/progressbar.png');
        


        this.load.spritesheet('player', 'assets/player.png', { frameWidth: 20, frameHeight: 25 });
        this.load.spritesheet('enemy', 'assets/enemy.png', { frameWidth: 20, frameHeight: 25 });
        this.load.spritesheet('coin', 'assets/coin.png', { frameWidth: 25, frameHeight: 25 });

        var url;
            url = 'js/rexvirtualjoystickplugin.min.js';
             //url = 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexvirtualjoystickplugin.min.js';
             this.load.plugin('rexvirtualjoystickplugin', url, true);
        
    }
    create(){
        this.scene.add('stage1', Stage1, true);
    }
}