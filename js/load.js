class LoadScene extends Phaser.Scene {
    preload() {
        this.load.image('bg', 'assets/bg.png');
        this.load.image('block', 'assets/block.png');

        this.load.image('end', 'assets/end.png');
        this.load.image('part', 'assets/part.png');
        this.load.image('progressbar', 'assets/progressbar.png');


        this.load.spritesheet('player', 'assets/player.png', { frameWidth: 20, frameHeight: 20 });
        this.load.spritesheet('enemy', 'assets/enemy.png', { frameWidth: 20, frameHeight: 20 });
        this.load.spritesheet('coin', 'assets/coin.png', { frameWidth: 25, frameHeight: 25 })
    }
    create(){
        this.scene.add('stage1', Stage1, true);
    }
}