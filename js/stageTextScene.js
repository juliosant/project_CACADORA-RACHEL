class StageTextScene extends Phaser.Scene {
    create() {
        this.StageText = this.add.text(this.game.renderer.width / 2, this.game.renderer.height / 2, texPresnetationHere,
            {font: '37px emulogic', fill:'#f7f2ad'}).setOrigin(0.5);
        
        this.time.addEvent({delay: 2500, callback: this.nextScene, callbackScope: this, loop: false});
    }
    nextScene(){
        this.scene.start(textHere);
    }
}