abstract class Race {
  constructor(private _name: string, private _dexterity: number) {}

  get name() { return this._name; }
  get dexterity() { return this._dexterity; }

  abstract get maxLifePoints(): number;

  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }
}

export default Race;
