import { EnergyType } from '../IEnergy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  protected _energyType: EnergyType;

  constructor() {
    super();

    this._energyType = 'mana';
    Necromancer.newInstance();
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Necromancer;
