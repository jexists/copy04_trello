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
	) { }


	//////////////////////////////////////
	//
	// BOARD SERVICE
	//
	//////////////////////////////////////

	//* 처음에 모든 보드 불러오는 코드 (주석풀어도 가능하고 안해도 가능)
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

	//* Board 생성하는 코드
	createBoard(target: Board): Observable<void> {
		return this.http.post<Board>(this.boardUrl, target).pipe(map(res => {
			this.hdRepo.addBoard(target);
		}));
	}

	//* Board 타이틀 수정하는 코드
	updateBoardTitle(board: Board, id: string): Observable<any> {
		const url = `${this.boardUrl}/${id}`;
		return this.http.put<Board>(url, board).pipe();
	}

	//* Board 지우는 코드
	deleteBoard(board: Board, id: string): Observable<void> {
		const url = `${this.boardUrl}/${id}/delete`;
		return this.http.delete<void>(url).pipe();
	}

	//* Id로 선택된 Board 불러오는 코드
	loadBoardById(id: string): Observable<Board> {
		const url = `${this.boardUrl}?id=${id}`;
		return this.http.get<Board>(url).pipe();
	}

	//* 에러 확인하는 방법
	// private handleError<T>(operation = 'operation', result?: T) {
	// 	return (error: any): Observable<T> => {
	// 		console.error(error);
	// 		return of(result as T);
	// 	}
	// }
}
