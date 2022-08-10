import AbstractClass from '../AbstractClass';

abstract class Race extends AbstractClass {
  protected abstract _maxLifePoints: number;

  constructor(protected _dexterity: number) {
    super();
  }

  get dexterity(): number { return this._dexterity; }
  
  protected static _instances = 0;

  protected static newInstance(): void {
    this._instances += 1;
  }

  static get instances(): number {
    return this._instances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Race;
