import Fighter from '../Fighter';
import Horde from '../Fighter/Horde';
import getRandomInt from '../utils';
import Battle from './Battle';

class PVE extends Battle {
  private _activeEnemies: Horde;

  constructor(player: Fighter, private _enemies: Horde) {
    super(player);
    this._activeEnemies = _enemies;
  }

  get enemies() {
    return this._enemies;
  }

  private get activeEnemies() {
    return this._activeEnemies;
  }

  private set activeEnemies(aliveEnemies: Horde) {
    this._activeEnemies = aliveEnemies;
  }

  private selectEnemy(): number {
    return getRandomInt(0, this.activeEnemies.length - 1);
  }

  private battleDone() {
    return Boolean(
      this.player.lifePoints <= -1 || this.activeEnemies.length === 0,
    );
  }

  fight(): number {
    while (!this.battleDone()) {
      this.player.attack(this.activeEnemies[this.selectEnemy()]);
      this.activeEnemies = this.activeEnemies.filter(
        ({ lifePoints }) => lifePoints >= 0,
      );
      this.activeEnemies.forEach((currEnemy) => currEnemy.attack(this.player));
    }
    return super.fight();
  }
}

export default PVE;
