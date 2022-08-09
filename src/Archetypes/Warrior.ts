import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  protected _energyType: EnergyType;

  constructor(name: string) {
    super(name);

    this._energyType = 'stamina';
    Warrior.newInstance();
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return this._instances;
  }
}

export default Warrior;
