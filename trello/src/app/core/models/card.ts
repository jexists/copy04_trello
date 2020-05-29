
import { Board } from './board';
import { List } from './list';

export interface Card {
  cardUUID: number;
  cardTitle: string;

  board: Board[];
  list: List[];
}