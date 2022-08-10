import Energy from '../Energy';
import SimpleFighter from './SimpĺeFighter';

interface Fighter extends SimpleFighter {
  strength: number;
  defense: number;
  energy?: Energy;
  attack(enemy: SimpleFighter): void;
  special?(enemy: SimpleFighter): void;
  levelUp(): void;
}

export default Fighter;
