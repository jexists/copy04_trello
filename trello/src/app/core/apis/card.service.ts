import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { HdRepo } from '../repos';
import { Card } from '../models/index';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(
    private http: HttpClient,
    private hdRepo: HdRepo,
  ) { }

  private cardUrl = 'api/cards';
 
  //////////////////////////////////////
  //
  // LIST SERVICE
  //
  //////////////////////////////////////

  //* Card 불러오기
  loadCardsByBoardId(boardId): Observable<void> {
    const url = `${this.cardUrl}?boardId=${boardId}`;
    return this.http.get<Card[]>(url).pipe(map(res => {
      // console.log(JSON.stringify(res));
      this.hdRepo.loadCards(res, true);
      
    }))
  }
  
  //* Card 생성하기
  createCard(target: Card): Observable<void> {
    return this.http.post<Card>(this.cardUrl, target).pipe(map(res => {
      this.hdRepo.addCard(target);
    }))
  }


  //* Card 지우는 코드
	deleteCard(card: Card, id: string): Observable<void> {
		const url = `${this.cardUrl}/${id}/delete`;
		return this.http.delete<void>(url).pipe();
	}
}