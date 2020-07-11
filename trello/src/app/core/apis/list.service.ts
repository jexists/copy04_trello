import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { List } from '../models/index';
import { HdRepo } from '../repos';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(
    private http: HttpClient,
    private hdRepo: HdRepo,
  ) { }

  private listUrl = 'api/lists';

  //////////////////////////////////////
	//
	// LIST SERVICE
	//
  //////////////////////////////////////
  
  //* Board Id로 List 불러오기
  loadListsByBoardId(boardId): Observable<void> {
    const url = `${this.listUrl}?boardId=${boardId}`;
    return this.http.get<List[]>(url).pipe(map(res => {
      this.hdRepo.loadLists(res, true);
    }));
  }

  //* List 생성하기
  createList(target: List): Observable<void> {
    return this.http.post<List>(this.listUrl, target).pipe(map(res => {
      this.hdRepo.addList(target);
    }))
  }

  //* List 타이틀 수정하는 코드
	updateListTitle(list: List, id: string): Observable<any> {
		const url = `${this.listUrl}/${id}`;
		return this.http.put<List>(url, list).pipe();
	}
  

}

