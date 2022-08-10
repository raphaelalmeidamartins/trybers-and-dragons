import { EnergyType } from '../IEnergy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  protected _energyType: EnergyType;

  constructor() {
    super();

    this._energyType = 'stamina';
    Ranger.newInstance();
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Ranger;
