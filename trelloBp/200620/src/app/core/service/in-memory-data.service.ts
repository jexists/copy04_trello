import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
// import { Board } from "../models"

import { Board, List } from '../models/index';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
	static genID() {
		throw new Error("Method not implemented.");
	}

  constructor() { }

  createDb() {
    const boards = [
      { id:1, boardUUID: "1", boardTitle: 'test1234', boardBg: '#86373a', starYN: false, accessYN: '10' },
      { id:2, boardUUID: "2", boardTitle: '테스트용', boardBg: '#cc8813', starYN: false, accessYN: '10' },
      { id:3, boardUUID: "3", boardTitle: '보드 삭제가능', boardBg: '#98f', starYN: false, accessYN: '20' }
    ];
    
    const lists = [
      { id:1, boardUUID: "1", listUUID:'1', listName: '리스트1'},
      { id:2, boardUUID: "1", listUUID:'1', listName: '리스트2'},
      { id:3, boardUUID: "2", listUUID:'1', listName: '리스트3'},
    ]
    return { boards, lists };
    
  }
  

  genID(boards: Board[]): number {
    return boards.length > 0 ? Math.max(...boards.map(board => board.id)) + 1 : 0;
  }


}
