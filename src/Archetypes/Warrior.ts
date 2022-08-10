import { EnergyType } from '../IEnergy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  protected _energyType: EnergyType;

  constructor() {
    super();

    this._energyType = 'stamina';
    Warrior.newInstance();
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Warrior;
