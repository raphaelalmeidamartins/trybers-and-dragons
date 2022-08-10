import Race from './Race';

class Halfling extends Race {
  protected _maxLifePoints: number;

  constructor(dexterity: number) {
    super(dexterity);

    this._maxLifePoints = 60;
    Halfling.newInstance();
  }
}

export default Halfling;
