
import { Board } from './board';
import { List } from './list';

export interface Card {
  // UUID

  board: Board[];
  list: List[];
}