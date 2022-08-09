abstract class Race {
  constructor(private _name: string, private _dexterity: number) {}

  get name() { return this._name; }
  get dexterity() { return this._dexterity; }
  
  protected static _instances = 0;

  protected static newInstance(): void {
    this._instances += 1;
  }

  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get maxLifePoints(): number;
}

export default Race;
