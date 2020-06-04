import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Board } from '../models/index';
import { HdRepo } from '../repos/hd.repo';
// import { BOARDS } from '../mockup/mock-board';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  private boardUrl = 'api/boards';

  constructor(
    private http: HttpClient,
    private hdRepo: HdRepo
  ) { }


  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  // private handleError<T> (operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {
  //     console.error(error);
  //     return of(result as T);
  //   }
  // }
  
  loadBoards(): Observable<Board[]> {
    return this.http.get<Board[]>(this.boardUrl).pipe(
      // catchError(this.handleError<Board[]>('getBoards',[]))
    );
  }
  
  createBoard(target: Board): Observable<void> {
    this.hdRepo.addBoard(target);
    return this.http.post<Board>(this.boardUrl, target).pipe(map(res => {

    }));
  }
  
  loadBoardByUUID(id: number): Observable<Board> {
    const url = `${this.boardUrl}/${id}`;

    return this.http.get<Board>(url).pipe(
      // tap(_ => this.log(`fetch id = {id}`)),
      // catchError(this.handleError<Board>(`loadBoard id ${id}`))
    );
  }


  updateBoard (board: Board): Observable<any> {
    return this.http.put(this.boardUrl, board, this.httpOptions).pipe(
      // tap(_ => this.log(`업데이트 보드 ${board.boardUUID}`)),
      // catchError(this.handleError<any>('updateBoard'))
    );
  }

  // createBoard (board: Board): Observable<Board> {
  //   return this.http.post<Board>(this.boardUrl, board).pipe(
  //     // tap((newBoard: Board) => this.log(`added hero w/ id=${newBoard.boardUUID}`)),
  //     catchError(this.handleError<Board>('addHero'))
  //   );
  // }


}
