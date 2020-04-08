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
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var tile;

var platforms;

var player;
var cursor;

var coins;

var score = 0;
var scoreText;

var hp = 200;
var hpText;

var game = new Phaser.Game(config);