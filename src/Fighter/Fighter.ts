import IEnergy from '../IEnergy';
import SimpleFighter from './SimpĺeFighter';

interface Fighter extends SimpleFighter {
  strength: number;
  defense: number;
  energy?: IEnergy;
  attack(enemy: SimpleFighter): void;
  special?(enemy: SimpleFighter): void;
  levelUp(): void;
}

export default Fighter;
