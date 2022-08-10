import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  constructor(player: Fighter, private _adversary: Fighter) {
    super(player);
  }

  get adversary() {
    return this._adversary;
  }

  private battleDone() {
    return Boolean(
      this.player.lifePoints <= -1 || this.adversary.lifePoints <= -1,
    );
  }

  fight(): number {
    while (!this.battleDone()) {
      this.player.attack(this.adversary);
      this.adversary.attack(this.player);
    }
    return super.fight();
  }
}

export default PVP;
