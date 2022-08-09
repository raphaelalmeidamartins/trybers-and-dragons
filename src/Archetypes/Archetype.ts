import { EnergyType } from '../Energy';

abstract class Archetype {
  private _special: number;
  private _cost: number;
  protected abstract _energyType: EnergyType;

  constructor(private _name: string) {
    this._special = 0;
    this._cost = 0;
  }

  get name(): string { return this._name; }
  get special(): number { return this._special; }
  get cost(): number { return this._cost; }

  protected static _instances = 0;

  protected static newInstance(): void {
    this._instances += 1;
  }

  static createdArchetypeInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get energyType(): EnergyType;
}

export default Archetype;
