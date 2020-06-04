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

  //http 코드
  // getLists(): Observable<List[]> {
  //   return this.http.get<List[]>(this.listUrl).pipe(
  //     catchError(this.handleError<List[]>('getList',[]))
  //   );
  // }

  // private handleError<T> (operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {
  //     console.error(error);
  //     return of(result as T);
  //   }
  // }


}

