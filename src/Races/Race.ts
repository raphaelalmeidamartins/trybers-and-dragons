import AbstractClass from '../AbstractClass';

abstract class Race extends AbstractClass {
  protected abstract _maxLifePoints: number;

  constructor(protected _dexterity: number) {
    super();
  }

  get dexterity(): number { return this._dexterity; }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Race;
