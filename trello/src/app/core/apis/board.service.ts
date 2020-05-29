import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Board } from '../models/board';
import { BOARDS } from '../mockup/mock-board';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  constructor(
    private http: HttpClient,

  ) { }

  private boardUrl = 'api/boards';

  private log(message: string) {
    
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  ////////////////////////////////
  //
  // LOADED BOARDS 
  //
  ////////////////////////////////

  // 기존코드
  // getBoards(): Board[] {
  //   return BOARDS;
  // }

  // observable 사용한 코드
  // getBoards(): Observable<Board[]> {
  //   return of(BOARDS);
  // }


  //http 코드
  getBoards(): Observable<Board[]> {
    return this.http.get<Board[]>(this.boardUrl).pipe(
      catchError(this.handleError<Board[]>('getBoards',[]))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }
  
  getBoard(uuid: number): Observable<Board> {
    return of(BOARDS.find(board => board.boardUUID === uuid))
  }

  
  ////////////////////////////////
  //
  // UPDATE BOARD
  //
  ////////////////////////////////

  updateBoard (board: Board): Observable<any> {
    return this.http.put(this.boardUrl, board, this.httpOptions).pipe(
      tap(_ => this.log(`업데이트 보드 ${board.boardUUID}`)),
      catchError(this.handleError<any>('updateBoard'))
    );
  }

  ////////////////////////////////
  //
  // ADD BOARD
  //
  ////////////////////////////////

  // addBoards (board: Board): Observable<Board> {
  //   return this.http.post<Board>(this.boardUrl, board).pipe(
  //     tap((newBoard: Board) => this.log(`added board id ${newBoard.boardUUID}`)),
  //     catchError(this.handleError<Board>('addBoard'))
  //   );
  // }

  addBoard (board: Board): Observable<Board> {
    return this.http.post<Board>(this.boardUrl, board).pipe(
      // tap((newBoard: Board) => this.log(`added hero w/ id=${newBoard.boardUUID}`)),
      catchError(this.handleError<Board>('addHero'))
    );
  }
}
