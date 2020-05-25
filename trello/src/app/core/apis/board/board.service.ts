import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Board } from '../../models/board';
import { BOARDS } from '../../mockup/mock-board';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  constructor() { }

  // 기존코드
  // getBoards(): Board[] {
  //   return BOARDS;
  // }

  getBoards(): Observable<Board[]> {
    return of(BOARDS);
  }

  getBoard(uuid: number): Observable<Board> {
    return of(BOARDS.find(board => board.boardUUID === uuid))
  }
}
