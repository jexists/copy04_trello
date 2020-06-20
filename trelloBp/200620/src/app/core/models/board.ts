import { List } from './list';

export class Board {
  id: number;
  boardUUID: string;
  boardTitle: string;
  boardBg: string;
  starYN: boolean;
  accessYN: string;

  // list: List[];
  constructor(json?: any) {
    if(!json) { return; }

    for(let key in json) {
      this[key] = json[key];
    }
  }
}