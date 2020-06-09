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
  
  loadBoards(): Observable<void> {
    return this.http.get<any>(this.boardUrl).pipe(map(res => {
      const targets = [];
      // res.forEach(json => {
      //   const target = new Board(json);
      //   targets.push(target);
      // });
      this.hdRepo.loadBoards(targets, true);
    }));
  }
  
  createBoard(target: Board): Observable<void> {
    
    return this.http.post<Board>(this.boardUrl, target).pipe(map(res => {

      this.hdRepo.addBoard(target);
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


}
