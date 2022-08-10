import Archetype from './Archetypes';
import IArchetype from './Archetypes/IArchetype';
import Fighter, { SimpleFighter } from './Fighter';
import IEnergy from './IEnergy';
import Race, { IRace } from './Races';
import getRandomInt from './utils';

class Character implements Fighter {
  private _name: string;
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _minLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: IEnergy;

  constructor(
    name: string,
    SelectedRace: IRace,
    SelectedArchetype: IArchetype,
  ) {
    this._name = name;
    this._dexterity = Character.randomValue();
    this._race = new SelectedRace(this._dexterity);
    this._archetype = new SelectedArchetype();
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._minLifePoints = -1;
    this._lifePoints = this._maxLifePoints;
    this._strength = Character.randomValue();
    this._defense = Character.randomValue();
    this._energy = {
      type_: this._archetype.energyType,
      amount: Character.randomValue(),
    };
  }

  private static randomValue(): number {
    return getRandomInt(1, 10);
  }

  get name(): string {
    return this._name;
  }

  get race(): Race {
    return this._race;
  }

  get archetype(): Archetype {
    return this._archetype;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  private set increaseMaxLifePoints(increase: number) {
    const updatedValue = this.maxLifePoints + increase;
    if (updatedValue <= this.race.maxLifePoints) {
      this._maxLifePoints = updatedValue;
    } else {
      this._maxLifePoints = this.race.maxLifePoints;
    }
  }

  get minLifePoints(): number {
    return this._minLifePoints;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  private set increaseLifePoints(value: number) {
    const heal = value + this.lifePoints;
    if (heal <= this.maxLifePoints) {
      this._lifePoints = heal;
    } else {
      this._lifePoints = this.maxLifePoints;
    }
  }

  private set decreaseLifePoints(value: number) {
    const damage = value - this.defense;
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

  private set increaseStrength(value: number) {
    this._strength += value;
  }

  private set decreaseStrength(value: number) {
    this._strength += value;
  }

  get defense(): number {
    return this._defense;
  }

  private set increaseDefense(value: number) {
    this._defense += value;
  }

  private set decreaseDefense(value: number) {
    this._strength += value;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  private set increaseDexterity(value: number) {
    this._dexterity += value;
  }

  private set decreaseDexterity(value: number) {
    this._dexterity += value;
  }

  get energy(): IEnergy {
    return { ...this._energy };
  }

  private set increaseEnergy(value: number) {
    const updatedValue = value + this.energy.amount;
    if (updatedValue < 10) {
      this._energy.amount = updatedValue;
    } else {
      this._energy.amount = 10;
    }
  }

  receiveDamage(attackPoints: number): number {
    this.decreaseLifePoints = attackPoints;
    return this.lifePoints;
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this.strength);
  }

  levelUp(): void {
    this.increaseMaxLifePoints = Character.randomValue();
    this.increaseLifePoints = this.maxLifePoints;
    this.increaseStrength = Character.randomValue();
    this.increaseDefense = Character.randomValue();
    this.increaseDexterity = Character.randomValue();
    this.increaseEnergy = 10;
  }

  special() {
    if (this.energy.amount === 10) {
      this.increaseLifePoints = this.maxLifePoints;
    }
  }
}

export default Character;
