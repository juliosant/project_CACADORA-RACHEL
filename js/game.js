class Temporary extends Phaser.Scene{
    create(){
        this.finalText1 = this.add.text(this.game.renderer.width / 2, 220,
            "Rachel! Voce achou Juliel!"+
            "\n\nMate todos os monstros para" + 
            "\n\ndestruir a Grande Tumba  \n\ne pegar a alavanca.   \n\n\nUse-a para destruir as lapides\n\ncinzas   e pegar as moedas."+
            "\n\nA Grande Tumba foi amaldicoada\n\npelos Deuses, fique longe."+
            "\n\n\nPor fim, Salve Juliel!",
            { font: '23px emulogic', fill: '#f7f2ad' }).setOrigin(0.5);

            

        this.add.image(740, 120, 'tombFinal').setScale(1.5);
        this.add.image(640, 160, 'lever').setScale(1.5);
        this.add.image(340, 260, 'tomb').setScale(1.2);
    }
}