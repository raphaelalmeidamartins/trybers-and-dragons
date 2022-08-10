import Race from './Race';

class Orc extends Race {
  protected _maxLifePoints: number;

  constructor(dexterity: number) {
    super(dexterity);

    this._maxLifePoints = 74;
    Orc.newInstance();
  }
}

export default Orc;
