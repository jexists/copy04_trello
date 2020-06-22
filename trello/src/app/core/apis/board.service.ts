import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Board } from '../models/index';
import { HdRepo } from '../repos/hd.repo';
import { InMemoryDataService } from '../service/in-memory-data.service';

import { Team } from '../models/index';

@Injectable({
	providedIn: 'root'
})
export class BoardService {

	private boardUrl = 'api/boards';

	constructor(
		private http: HttpClient,
		private hdRepo: HdRepo,
		public inMemoryData: InMemoryDataService
	) { }


	// httpOptions = {
	// 	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
	// }

	//////////////////////////////////////
	//
	// BOARD SERVICE
	//
	//////////////////////////////////////

	//* inMemoryData 불러오기전에 사용했던 보드들 불러오는 코드
	// loadBoards(): Observable<Board[]> {
		// return this.http.get<Board[]>(this.boardUrl).pipe();
	// }

	//* 처음에 보드 불러오는 코드 (주석풀어도 가능하고 안해도 가능)
	loadBoards(): Observable<any> {
		return this.http.get<Board[]>(this.boardUrl).pipe(map(res => {
			const targets = [];
			// res.forEach(json => {
			// 	const target = new Board(json);
			// 	targets.push(target);
			// 	console.log(JSON.stringify(json));
			// });
			this.hdRepo.loadBoards(targets, true);
		}));
	}

	//* 처음에 TeamId로 보드 불러오는 코드
	loadBoardByTeamId(teamId): Observable<any> {
		const url = `${this.boardUrl}?teamId=${teamId}`;
		return this.http.get<Board[]>(url).pipe(map(res => {
			this.hdRepo.loadBoards(res, true);
		}));
	}
	
	//* 처음에 UserId로 보드 불러오는 코드
	loadBoardByUserId(userId): Observable<any> {
		const url = `${this.boardUrl}?userId=${userId}`;
		return this.http.get<Board[]>(url).pipe(map(res => {
			this.hdRepo.loadBoards(res, true);
		}));
	}

	/** GET: 서버에 저장된 데이터를 조회 */
	loadBoardById(id: string): Observable<Board> {
		const url = `${this.boardUrl}?id=${id}`;
		return this.http.get<Board>(url).pipe();
	}

	// loadBoardByUUID(uuid: string): Observable<void> {
		// const url = `${this.boardUrl}/${uuid}`;
		// return this.http.get<Board>(url).pipe(map(res => {
		// 	const targets = [];
		// 	res.forEach(json => {
		// 		const target = new Board(json);
		// 		targets.push(target);
		// 	});
		// 	this.hdRepo.loadBoards(targets, true)
		// }));
	// }

	/** POST: 서버에 데이터 생성  */
	// createBoard(target: Board): Observable<void> {
		// return this.http.post<Board>(this.boardUrl, target).pipe(map(res => {
		// 	this.hdRepo.addBoard(target);
		// }));
	// }

	/** PUT: 서버에 저장된 데이터를 변경 */
	updateBoardTitle(board: Board, id: string): Observable<any> {
		const url = `${this.boardUrl}/${id}`;
		return this.http.put<Board>(url, board).pipe();
	}

	/** DELETE: 서버에 저장된 데이터를 삭제 */
	deleteBoard(board: Board, id: string): Observable<Board> {
		const url = `${this.boardUrl}/${id}`;
		return this.http.delete<Board>(url).pipe();
	}


	// private handleError<T>(operation = 'operation', result?: T) {
	// 	return (error: any): Observable<T> => {
	// 		console.error(error);
	// 		return of(result as T);
	// 	}
	// }
}
