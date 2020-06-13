import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Board } from '../models/index';
import { HdRepo } from '../repos/hd.repo';
import { R3TargetBinder } from '@angular/compiler';
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
  
  // loadBoards(): Observable<void> {
  //   return this.http.get<any>(this.boardUrl).pipe(map(res => {
  //     const targets = [];
  //     // res.forEach(json => {
  //     //   const target = new Board(json);
  //     //   targets.push(target);
  //     // });
  //     this.hdRepo.loadBoards(targets, true);
  //   }));
  // }

  loadBoards (): Observable<Board[]> {
    return this.http.get<Board[]>(this.boardUrl)
      .pipe(
        // tap(_ => this.log('버킷리스트 확인')),
        // catchError(this.handleError<Hero[]> ('getHeroes', []))
      );
  }
  
  createBoard(target: Board): Observable<void> {
    
    return this.http.post<Board>(this.boardUrl, target).pipe(map(res => {

      this.hdRepo.addBoard(target);
    }));
  }

  // createBoard(target: Board): Observable<Board> {
  //   return this.http.post<Board>(this.boardUrl, target, this.httpOptions).pipe(
  //   );
  // }

  /** GET: 서버에 저장된 데이터를 불러오기 */
  loadBoardByUUID(id: number): Observable<Board> {
    const url = `${this.boardUrl}/${id}`;

    return this.http.get<Board>(url).pipe(
      // tap(_ => this.log(`fetch id = {id}`)),
      // catchError(this.handleError<Board>(`loadBoard id ${id}`))
    );
  }


  /** PUT: 서버에 저장된 데이터를 변경 */
  updateBoard (board: Board): Observable<any> {
		const url = `${this.boardUrl}/${board.boardUUID}/nm`;

    return this.http.put<Board>(url, board).pipe(map(res => {
			this.hdRepo.editBoard(board);
    }));
  }

  // updateBoard (board: Board): Observable<any> {
  //   return this.http.put(this.boardUrl, board, this.httpOptions).pipe(
  //     // tap(_ => this.log(`업데이트 보드 ${board.boardUUID}`)),
  //     // catchError(this.handleError<any>('updateBoard'))
  //   );
  // }

// updateHero (hero: Hero): Observable<any> {
//   return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
//     tap(_ => this.log(`${hero.id}번째 버킷리스트 수정`)),
//     catchError(this.handleError<any>('updateHero'))
//   );
// }

// private handleError<T> (operation = 'operation', result?: T) {
//   return (error: any): Observable<T> => {
//     console.error(error);
//     this.log(`${operation} failed: ${error.message}`);
//     return of(result as T);
//   }
// }
}
