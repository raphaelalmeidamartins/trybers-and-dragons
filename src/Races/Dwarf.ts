import Race from './Race';

class Dwarf extends Race {
  protected _maxLifePoints: number;

  constructor(dexterity: number) {
    super(dexterity);

    this._maxLifePoints = 80;
    Dwarf.newInstance();
  }
}

export default Dwarf;
