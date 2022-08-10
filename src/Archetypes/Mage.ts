import { EnergyType } from '../IEnergy';
import Archetype from './Archetype';

class Mage extends Archetype {
  protected _energyType: EnergyType;

  constructor() {
    super();

    this._energyType = 'mana';
    Mage.newInstance();
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Mage;
