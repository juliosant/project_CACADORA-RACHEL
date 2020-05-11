class Bullet extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, 'ammunition');
    }

    fire(x, y) {
        this.body.reset(x, y);

        this.setActive(true);
        this.setVisible(true);

        if (movimentBullet === 'up') {
            this.setVelocityY(-300);
        }
        else if (movimentBullet === 'down') {
            this.setVelocityY(300);
        }
        else if (movimentBullet === 'left') {
            this.setVelocityX(-300);
        }
        else if (movimentBullet === 'right') {
            this.setVelocityX(300);
        }
    }
}

class Bullets extends Phaser.Physics.Arcade.Group {
    constructor(scene) {
        super(scene.physics.world, scene);

        this.createMultiple({
            frameQuantity: 10,
            key: 'ammunition',
            active: false,
            visible: false,
            classType: Bullet
        });
    }

    fireBullet(x, y) {
        let bullet = this.getFirstDead(false);

        if (bullet) {
            bullet.fire(x, y);
        }
    }
}