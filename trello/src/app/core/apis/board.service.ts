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

	//////////////////////////////////////
	//
	// BOARD SERVICE
	//
	//////////////////////////////////////

	loadBoards(): Observable<Board[]> {
		return this.http.get<Board[]>(this.boardUrl).pipe();
	}

	/** GET: 서버에 저장된 데이터를 조회 */
	loadBoardByUUID(id: number): Observable<Board> {
		const url = `${this.boardUrl}/${id}`;
		return this.http.get<Board>(url).pipe();
	}

	/** POST: 서버에 데이터 생성  */
	createBoard(target: Board): Observable<void> {
		return this.http.post<Board>(this.boardUrl, target).pipe(map(res => {
			this.hdRepo.addBoard(target);
		}));
	}

	/** PUT: 서버에 저장된 데이터를 변경 */
	updateBoardTitle(board: Board, id: number): Observable<any> {
		const url = `${this.boardUrl}/${id}`;
		return this.http.put<Board>(url, board).pipe();
	}

	/** DELETE: 서버에 저장된 데이터를 삭제 */
	deleteBoard(board: Board, id: number): Observable<Board> {
		const url = `${this.boardUrl}/${id}`;
		return this.http.delete<Board>(url, this.httpOptions).pipe();
	}


	private handleError<T>(operation = 'operation', result?: T) {
		return (error: any): Observable<T> => {
			console.error(error);
			return of(result as T);
		}
	}
}
