import Energy from '../Energy';
import SimpleFighter from './SimpĺeFighter';

interface Fighter extends SimpleFighter {
  strength: number;
  defense: number;
  energy?: Energy;
  attack(enemy: Fighter): void;
  special?(enemy: Fighter): void;
  levelUp(): void;
}

export default Fighter;
