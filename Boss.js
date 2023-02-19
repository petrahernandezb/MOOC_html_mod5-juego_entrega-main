/**
 *  Representa al supervillano de final de fase. Aparece tras matar al oponente normal.
 */
class Boss extends Opponent{
    /**
     * @param game {Game} La instancia del juego al que pertenece el supervillano
     */
    constructor(game) {
        super(game);
        this.speed = OPPONENT_BOSS_SPEED;
        this.image.src = OPPONENT_BOSS_PICTURE;
    }

    collide() {
        if (!this.dead) {
            setTimeout(() => {
                this.game.endGame();
            }, 2000);
            this.image.src = OPPONENT_BOSS_PICTURE_DEAD;
            this.dead = true;
            this.game.increaseScore();
        }
    }

}