import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Board } from '../../models/board';
import { BOARDS } from '../../mockup/mock-board';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  constructor(
    private http: HttpClient,

  ) { }

  // 기존코드
  // getBoards(): Board[] {
  //   return BOARDS;
  // }

  // observable 사용한 코드
  // getBoards(): Observable<Board[]> {
  //   return of(BOARDS);
  // }

  private boardUrl = 'api/boards';

  //http 코드
  getBoards(): Observable<Board[]> {
    return this.http.get<Board[]>(this.boardUrl);
  }

  getBoard(uuid: number): Observable<Board> {
    return of(BOARDS.find(board => board.boardUUID === uuid))
  }
}
