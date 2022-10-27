import IstanceCounter from '../InstanceCounter';

abstract class Race extends IstanceCounter {
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
