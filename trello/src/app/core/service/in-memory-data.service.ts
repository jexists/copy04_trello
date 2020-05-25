import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Board } from '../models/index';
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  constructor() { }

  createDb() {
    const boards = [
      { boardUUID: 11, boardTitle: 'text123', boardBg: '#fff', starYN: false, accessYN: false },
      { boardUUID: 12, boardTitle: '테스트용입니다', boardBg: '#fff', starYN: false, accessYN: false },
      { boardUUID: 13, boardTitle: '테스티 보드이름입니다. 나중에 지울예정', boardBg: '#fff', starYN: false, accessYN: false }
    ];
    return {boards};
  }

  genUUID(boards: Board[]): number {
    return boards.length > 0 ? Math.max(...boards.map(board => board.boardUUID)) + 1 : 11;
  }

}
