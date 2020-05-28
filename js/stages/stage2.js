class Stage2 extends Stage {

    //Para comportamentos referentes a 2a fase
    isStage2 = true;

    //Orientações iniciais
    introductionStage = 'introductionStage2';

    //Apresentação
    nameMaze0 = "Labirinto 2"
    nameMaze1 = "Cidade"

    //Definir bloclos do labirinto
    keyBlock = 'blockStage2'

    //Definir chão do labirinto
    keyBackground = 'bgStage2'

    //Definir formato do labirinto
    maze = [
        /* 1: local onde ficam os blocos
           2: local onde Rachel começará a fase
           3: local onde estam as moedas.
           4: Local inicial do inimigo.
           5: local onde estará a arma de Rachel
           6: local de fim da fase
           7: criação da torre de tiros
       */
        [],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1],
        [0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 1, 5, 0, 3, 7, 1],
        [0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1],
        [0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 1, 0, 1],
        [0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 1, 0, 1, 0, 1],
        [0, 0, 0, 0, 0, 0, 1, 3, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 7, 1],
        [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 3, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1],
        [0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 3, 1],
        [0, 0, 0, 0, 0, 0, 1, 7, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
        [0, 0, 0, 0, 0, 0, 1, 7, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 7, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 7, 1],
        [0, 0, 0, 0, 0, 0, 1, 3, 1, 4, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 3, 0, 1, 1, 0, 1, 0, 1, 0, 1, 6, 1, 0, 1],
        [0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
        [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ]

    //Métodos ligados ao stage1
    //criar obstáculos
    createObstacles(){
        this.obstacles = this.physics.add.group();
    }
    //Métodos ligados ao stage2
    movimentOfObstacles(){
        this.tween = this.tweens.add({
            targets: this.groupObstacle[0],

            x: this.groupObstacle[0].x - 50,
            duration: 300,
            ease: 'Power',
            yoyo: true,
            loop: -1,
            loopDelay: 2500,

        });

        this.tween = this.tweens.add({
            targets: this.groupObstacle[1],

            x: this.groupObstacle[1].x + 90,
            duration: 500,
            ease: 'Power',
            yoyo: true,
            loop: -1,
            loopDelay: 1500,


        });

        this.tween = this.tweens.add({
            targets: this.groupObstacle[2],

            x: this.groupObstacle[2].x - 50,
            duration: 800,
            ease: 'Power',
            yoyo: true,
            loop: -1,
            loopDelay: 1500,


        });

        this.tween = this.tweens.add({
            targets: this.groupObstacle[3],

            y: this.groupObstacle[3].y - 50,
            duration: 500,
            ease: 'Power',
            yoyo: true,
            loop: -1,
            loopDelay: 1500,


        });

        this.tween = this.tweens.add({
            targets: this.groupObstacle[4],
            y: this.groupObstacle[4].y + 75,
            duration: 500,
            ease: 'Power',
            yoyo: true,
            loop: -1,
            loopDelay: 2500,


        });

        this.tween = this.tweens.add({
            targets: this.groupObstacle[5],

            x: this.groupObstacle[5].x + 75,
            duration: 400,
            ease: 'Power',
            yoyo: true,
            loop: -1,
            loopDelay: 1500,

        });

        this.tween = this.tweens.add({
            targets: this.groupObstacle[6],

            y: this.groupObstacle[6].y + 75,
            duration: 300,
            ease: 'Power',
            yoyo: true,
            loop: -1,
            loopDelay: 1500,

        });
    }
    //colisão do obstáculo móvel
    collidersStage() {
        this.physics.add.overlap(this.player, this.obstacles, this.damage, null, this);
    }
    //destrir obstaculos do estágio 2
    destroyObstaclesStage() {
        let i = 0
        let j = this.obstacles.getLength();
        for (i = 0; i < j; i++) {
            this.groupObstacle[i].destroy();
        }
    }
    //musica de fundo
    activeSound() {
        this.sndStage = this.sound.add('sndStage2');
        this.sndStage.setVolume(0.5);
        this.sndStage.loop = true;
        this.sndStage.play();
        //this.sndStage.pause();
        //this.sndStage.resume();

    }
    //desativar musica de fundo
    desactiveSound() {
        this.sndStage.stop();

    }
    //chamar estagio 3
    callNextScene() {
        this.sndVictory.stop();
        textHere = 'stage3'
        texPresnetationHere = 'LABIRINTO DO CEMITERIO'
        this.scene.start('stageText')
        //this.scene.start('stage3')
    }
}