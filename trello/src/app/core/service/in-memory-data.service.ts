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
      { id:11, boardUUID: 11, boardTitle: 'text123', boardBg: '#fff', starYN: false, accessYN: false },
      { id:12, boardUUID: 12, boardTitle: '테스트용입니다', boardBg: '#fff', starYN: false, accessYN: false },
      { id:13, boardUUID: 13, boardTitle: '테스티 보드이름입니다. 나중에 지울예정', boardBg: '#fff', starYN: false, accessYN: false }
    ];
    return {boards};
    
  }
  createList() {
    const lists = [
      {listUUID:111, listTitle: '중요' },
      {listUUID:112, listTitle: '중요1111' },
      {listUUID:113, listTitle: '중요2222' }
    ];
    return {lists};
  }

  genUUID(boards: Board[]): number {
    return boards.length > 0 ? Math.max(...boards.map(board => board.boardUUID)) + 1 : 11;
  }
  genListUUID(lists: List[]): number {
    return lists.length > 0 ? Math.max(...lists.map(list => list.listUUID)) + 1 : 111;
  }


}
