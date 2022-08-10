import AbstractClass from '../AbstractClass';
import { EnergyType } from '../IEnergy';

abstract class Archetype extends AbstractClass {
  private _special: number;
  private _cost: number;

  constructor() {
    super();

    this._special = 0;
    this._cost = 0;
  }

  get special(): number { return this._special; }
  get cost(): number { return this._cost; }

  protected static _instances = 0;

  protected static newInstance(): void {
    this._instances += 1;
  }

  static get instances(): number {
    return this._instances;
  }

  abstract get energyType(): EnergyType;
}

export default Archetype;
