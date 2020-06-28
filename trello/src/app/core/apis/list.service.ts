import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { List } from '../models/index';
import { HdRepo } from '../repos';
// import { InMemoryDataService } from '../service';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(
    private http: HttpClient,
    private hdRepo: HdRepo,
  ) { }

  private listUrl = 'api/lists';

  loadLists(): Observable<List[]> {
    return this.http.get<List[]>(this.listUrl).pipe();
  }

  loadListsByBoardId(boardId): Observable<any> {
    const url = `${this.listUrl}?boardUUID=${boardId}`;
    return this.http.get<List[]>(url).pipe(map(res => {
      this.hdRepo.loadLists(res, true);
      // console.log('##'+JSON.stringify(res));
    }));
  }

  createList(target:List): Observable<void> {
    return this.http.post<List>(this.listUrl, target).pipe(map(res => {
      this.hdRepo.addList(target);
      // this.hdRepo.loadLists();
      // console.log(JSON.stringify(target));
    }))
  }

  private handleError<T>(operation = 'operation', result?: T) {
		return (error: any): Observable<T> => {
			console.error(error);
			return of(result as T);
		}
	}
}

