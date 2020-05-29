
import { Board } from './board';

export interface List {
  // UUID
  listUUID: number;
  listTitle: string;
  
  board: Board[];
}
