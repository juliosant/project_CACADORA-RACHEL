class Stage3 extends Stage {

    //Para comportamentos referentes a 3a fase
    isStage3 = true;

    //Orientações iniciais
    introductionStage = 'introductionStage3';

    //apresentação
    nameMaze0 = "Labirinto 3"
    nameMaze1 = "Cemiterio"

    //Definir bloclos do labirinto
    keyBlock = 'blockStage3'

    //Definir chão do labirinto
    keyBackground = 'bgStage3'


    //Definir formato do labirinto
    maze = [
        /*  1: local onde ficam os blocos
            2: local onde Rachel começará a fase
            3: local onde estam as moedas.
            4: Local inicial do inimigo.
            5: local onde estará a arma de Rachel
            6: proteção da alavanca
            7: criação de armadilhas
            8: desarmador de armadilhas
       */
        [],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 7, 3, 1, 0, 1, 0, 0, 0, 0, 0, 1, 8, 1],
        [0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1],
        [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 7, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 5, 0, 1, 0, 1, 3, 1, 0, 1, 4, 1],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 7, 0, 0, 1, 0, 1],
        [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1],
        [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 7, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1],
        [0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 3, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1],
        [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 3, 1],
        [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 7, 1],
        [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1],
        [0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 1, 7, 3, 1, 1, 0, 0, 0, 1, 0, 1, 1, 4, 0, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 4, 6, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 0, 1, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ]

    //Métodos ligados ao stage3
    //criar tumbas
    createObstacles(){
        this.obstacles = this.physics.add.staticGroup();
    }
    createParticlesOfObstacles(){
        this.tombFinalParticle = this.add.particles('tombFinalParticle');
        this.tombParticle = this.add.particles('tombParticle');
    }
    //criar botão de alavanca
    createLeverButton() {
        this.leverButton = this.add.image(962.5, 350, 'leverButton').setInteractive()
            .setVisible(false);
        this.leverButton.on('pointerdown', function (pointer) {
            this.leverButton.setTintFill(0xc7bf97, 0xfff3c9, 0xc7bf97);
            let i;
            this.sndExplosion.play();
            let j = this.obstacles.getLength();
            for (i = 0; i < j; i++) {
                this.destroyTomb(this.groupObstacle[i]);
            }
            this.leverButton.destroy();

        }, this);
    }
    //Ativar botão da alavanca
    getLever(player, lever) {
        lever.disableBody(true, true);
        this.leverButton.setVisible(true);
        this.c += 45;

    }
    //Destruir as tumbas após usar a alavanca
    destroyTomb(tomb) {
        let x = tomb.x;
        let y = tomb.y;
        let emitter = this.tombParticle.createEmitter({ maxParticles: 50 });
        emitter.setPosition(x, y);
        emitter.setSpeed(50);

        tomb.destroy();
    }
    //criar instancias de personagens
    createInstancesOfStage() {
        this.tombFinal = this.physics.add.image(862.5, 87, 'tombFinal');
        this.JulielText = this.add.text(800, 435, 'Juliel', { font: '12px emulogic', fill: '#ffffff' });
        this.gameObjective = this.physics.add.image(840, 470, 'objective');

    }
    //colisões de personagens adicionais
    collidersStage() {
        this.physics.add.collider(this.player, this.obstacles);
        this.physics.add.overlap(this.player, this.lever, this.getLever, null, this);
        this.physics.add.overlap(this.player, this.tombFinal, this.damage, null, this);
        this.physics.add.overlap(this.player, this.gameObjective, this.callNextStage, null, this);
    }
    //ativar som
    activeSound() {
        this.sndStage = this.sound.add('sndStage3');
        this.sndStage.setVolume(0.5);
        this.sndStage.loop = true;
        this.sndStage.play();
        //this.sndStage.pause();
        //this.sndStage.resume();
    }
    //desativar som
    desactiveSound() {
        this.sndStage.stop();
    }
    //Mensagem spbre uso de arma - Chamado pelo getWeapon apemnas na fase 3 
    msgAtentionStage() {
        this.atentionMsg0 = this.add.text(this.game.renderer.width / 2, this.game.renderer.height / 2, ' Atencao!', {
            font: '25px emulogic', fill: '#00aa00'
        }).setOrigin(0.5);
        this.atentionMsg1 = this.add.text(this.game.renderer.width / 2, (this.game.renderer.height / 2) + 50, ' Voce so pode errar 1 bala', {
            font: '25px emulogic', fill: '#00aa00'
        }).setOrigin(0.5);

        this.time.addEvent({ delay: 3500, callback: this.destroyMsg, callbackScope: this, loop: false })
    }
    //Somente no estágio 3 usada somente pelo metodo getWapon na 3a fase
    destroyMsg() {
        this.atentionMsg0.destroy();
        this.atentionMsg1.destroy()
    }
    //Caso tenha menos balas que mosntros para matar
    fewerBulletsThanMonsters() {
        if (this.enemyPosition > this.amunitionBullet) {
            this.player.disableBody(true, true);
            this.weaponButton.setVisible(false);
            textGameOverHere = 'Municao insuficientes para esta etapa'

            this.add.text(this.game.renderer.width / 2, this.game.renderer.height / 2, ' Menos balas que monstros',
                { font: '30px emulogic', fill: '#ff0000' }).setOrigin(0.5);
            this.add.text(this.game.renderer.width / 2, (this.game.renderer.height / 2) + 50, '  encapuzados',
                { font: '30px emulogic', fill: '#ff0000' }).setOrigin(0.5);

            this.time.addEvent({ delay: 3500, callback: this.gameOver, callbackScope: this, loop: false })
        }
    }
    //Destruir tumba branca amaldiçoada
    destroyTombFinal() {
        if (this.enemyPosition === 0) {
            this.sndExplosion.play();
            let x, y
            x = this.tombFinal.x;
            y = this.tombFinal.y;
            let emitter = this.tombFinalParticle.createEmitter({ maxParticles: 50 });
            emitter.setPosition(x, y);
            emitter.setSpeed(50);

            this.tombFinal.disableBody(true);
            this.tombFinal.setVisible(false)
        }
    }
    //Encerramento do estágio 3
    textEndingStage3() {

        this.nextStageText = this.add.text((this.game.renderer.width / 2) + 10, 200, 'Voce conseguiu salvar Juliel!', { font: '20px emulogic', fill: '#ffffff' })
            .setOrigin(0.5);
        this.ScoreFinalStageText = this.add.text(this.game.renderer.width / 2, 250, 'Pts acumulados: ' + this.score, { font: '20px emulogic', fill: '#ffffff' })
            .setOrigin(0.5);
        this.ScoreFinalStageText = this.add.text(this.game.renderer.width / 2, 300, 'Tempo restante: ' + this.c, { font: '20px emulogic', fill: '#ffffff' })
            .setOrigin(0.5);
        this.ScoreFinalStageText = this.add.text(this.game.renderer.width / 2, 350, 'Pontuacao Final: ' + currentScore, { font: '20px emulogic', fill: '#ffffff' })
            .setOrigin(0.5);
    }
    //chamar cena de final de jogo
    callNextScene() {
        this.sndVictory.stop();

        this.scene.start('final')
    }
}