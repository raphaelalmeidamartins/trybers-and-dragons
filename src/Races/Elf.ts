import Race from './Race';

class Elf extends Race {
  protected _maxLifePoints: number;

  constructor(dexterity: number) {
    super(dexterity);

    this._maxLifePoints = 99;
    Elf.newInstance();
  }
}

export default Elf;
