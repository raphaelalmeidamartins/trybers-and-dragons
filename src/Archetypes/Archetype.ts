import { EnergyType } from '../IEnergy';
import IstanceCounter from '../InstanceCounter';

abstract class Archetype extends IstanceCounter {
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
