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

  abstract get energyType(): EnergyType;
}

export default Archetype;
