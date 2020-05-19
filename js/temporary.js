class Temporary extends Phaser.Scene{
    create(){
        this.introductoryText = this.add.text(this.game.renderer.width/2, 200, 
        "\n\n\n\nMate todos os mostros para\n\ndesabilitar a Grande tumba    e \n\npegue a alavanca    para explodir \n\nas outras tumbas inferiores\n\ne pegar as moedas.\n\n\nAs tumbas sao amaldicoadas pelos \n\ndeuses entao nunca chegue perto \n\ndelas\n\n\nPor fim, salve Juliel!",
        {font: '23px emulogic', fill: '#f7f2ad'}).setOrigin(0.5);
        
        this.add.sprite(760, 100, 'tombFinal').setScale(1.5);
        this.add.image(520, 140, 'lever').setScale(2);
        this.add.image(770, 180, 'tomb').setScale(1.5);


        
    }


}