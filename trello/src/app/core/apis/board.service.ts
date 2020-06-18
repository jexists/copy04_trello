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

	loadBoards(): Observable<Board[]> {
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

	/** GET: 서버에 저장된 데이터를 불러오기 */
	loadBoardByUUID(id: number): Observable<Board> {
		const url = `${this.boardUrl}/${id}`;

		return this.http.get<Board>(url).pipe(
			// tap(_ => this.log(`fetch id = {id}`)),
			// tap(this.handleError<Board>(`loadBoard id ${id}`))
		);
	}


	/** PUT: 서버에 저장된 데이터를 변경 */
	updateBoardTitle(board: Board, id: number): Observable<any> {
		const url = `${this.boardUrl}/${id}`;

		// board.modUserUid = this.rolePolicyManager.getCurrentUser().userUid;
		// return this.http.put<Board>(url, board).pipe(map(res => {
		// 	console.log('updateBoardTitle');
		// 	this.hdRepo.editBoard(board);
		// }));

		console.log("서비스 제목" + JSON.stringify(board) + "id" + id);
		
		return this.http.put<Board>(url, board).pipe(
			// catchError(this.handleError<any>('updateHero'))
		);
	}

	deleteBoard(board: Board, id: number): Observable<Board> {
		const url = `${this.boardUrl}/${id}`;

		return this.http.delete<Board>(url, this.httpOptions).pipe(
			// tap(_=> console.log(`삭제`)),
			// catchError(this.handleError<Board>('delete'))
		);
	}
	private handleError<T>(operation = 'operation', result?: T) {
		return (error: any): Observable<T> => {
			console.error(error);
			return of(result as T);
		}
	}
}
