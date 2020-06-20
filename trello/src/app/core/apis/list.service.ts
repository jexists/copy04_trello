import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { List } from '../models/index';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(
    private http: HttpClient,

  ) { }

  private listUrl = 'api/lists';

  loadLists(): Observable<List[]> {
    return this.http.get<List[]>(this.listUrl).pipe();
  }

  loadListsByUUID(id: number): Observable<List[]> {
    const url = `${this.listUrl}/${id}`;
    return this.http.get<List[]>(url).pipe(

      tap(_ => this.handleError(`${id}번째로 가고싶은 여행지 이동`)),
      catchError(this.handleError<List[]>(`getHero id=${id}`))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
		return (error: any): Observable<T> => {
			console.error(error);
			return of(result as T);
		}
	}
}

