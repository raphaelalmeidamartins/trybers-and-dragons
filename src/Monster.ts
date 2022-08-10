import { SimpleFighter } from './Fighter';
import getRandomInt from './utils';

class Monster implements SimpleFighter {
  private _minLifePoints: number;
  protected _lifePoints: number;
  protected _strength: number;

  constructor() {
    this._minLifePoints = -1;
    this._lifePoints = 85;
    this._strength = 63;
  }

  private static randomValue(): number {
    return getRandomInt(1, 10);
  }

  get minLifePoints(): number {
    return this._minLifePoints;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  private set decreaseLifePoints(damage: number) {
    if (damage > 0) {
      let updatedValue = this.lifePoints - damage;
      updatedValue = updatedValue <= this.minLifePoints
        ? this.minLifePoints
        : updatedValue;
      this._lifePoints = updatedValue;
    }
  }

  get strength(): number {
    return this._strength;
  }

  receiveDamage(attackPoints: number): number {
    this.decreaseLifePoints = attackPoints;
    return this.lifePoints;
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this.strength);
  }
}

export default Monster;
