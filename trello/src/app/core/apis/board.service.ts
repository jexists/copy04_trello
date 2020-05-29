import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Board } from '../models/index';
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

  loadBoards(): Observable<Board[]> {
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
  
  loadBoard(uuid: number): Observable<Board> {
    return of(BOARDS.find(board => board.boardUUID === uuid))
  }


  updateBoard (board: Board): Observable<any> {
    return this.http.put(this.boardUrl, board, this.httpOptions).pipe(
      tap(_ => this.log(`업데이트 보드 ${board.boardUUID}`)),
      catchError(this.handleError<any>('updateBoard'))
    );
  }

  createBoard (board: Board): Observable<Board> {
    return this.http.post<Board>(this.boardUrl, board).pipe(
      // tap((newBoard: Board) => this.log(`added hero w/ id=${newBoard.boardUUID}`)),
      catchError(this.handleError<Board>('addHero'))
    );
  }
}
