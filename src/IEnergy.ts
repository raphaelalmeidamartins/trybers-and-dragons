type EnergyType = 'mana' | 'stamina';

interface IEnergy {
  type_: EnergyType;
  amount: number;
}

export default IEnergy;
export { EnergyType };
