import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Board, List } from '../models/index';
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  constructor() { }

  createDb() {
    const boards = [
      { id:1, boardUUID: 1, boardTitle: 'text123', boardBg: '#86373a', starYN: false, accessYN: false },
      { id:2, boardUUID: 2, boardTitle: '테스트용입니다', boardBg: '#cc8813', starYN: false, accessYN: false },
      { id:3, boardUUID: 3, boardTitle: '테스티 보드이름입니다. 나중에 지울예정', boardBg: '#98f', starYN: false, accessYN: false }
    ];
    
    return {boards};
    
  }
  

  genUUID(boards: Board[]): number {
    return boards.length > 0 ? Math.max(...boards.map(board => board.boardUUID)) + 1 : 0;
  }


}
