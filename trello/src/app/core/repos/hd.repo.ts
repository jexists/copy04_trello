import { Injectable } from '@angular/core';

import * as _ from 'lodash';

import {
  Team,
  Board,
  List,
  Card
} from '../models/index';

@Injectable() export class HdRepo {


  private team: Team[] = [];

  private boards: Board[] = [];

  private lists: List[] = [];

  private cards: Card[] = [];
  
  private cardMap: Map<String, Card[]> = new Map<String, Card[]>();

  //Repo 삭제
  clearAll(): void {
    this.clearBoards();
    this.clearLists();
    this.clearCards();
  }

  //////////////////////////////////////////////
  //
  //  Board Function
  //
  /////////////////////////////////////////////

  //Board 삭제
  clearBoards(): void {
    this.boards.length = 0;
  }

  //Board 불러오기
  loadBoards(boards: Board[], isClear: boolean): void {
    if (isClear) { this.clearBoards(); }
    this.boards = this.boards.concat(boards);
  }

  findBoard(cond: any): Board {
    return _.find(this.boards, cond);
  }

  getBoardByStar(): Board[] {
    return _.filter(this.boards, {'starYN':true});
  }

  getBoard():Board{
    return this.boards[0];
  }
  
  getBoards(): Board[] {
    return this.boards;
  }

  addBoard(board: Board): void {
    this.boards.push(board);
  }

  editBoard(board: Board): void {
    const index = _.findIndex(this.boards, { boardUUID: board.id });
    this.boards[index] = board;
  }

  removeBoard(board: Board): void {
    const index = _.findIndex(this.boards, { id: board.id });
        if (index < 0) { return; }
    this.boards.splice(index, 1);
  }



  //////////////////////////////////////////////
  //
  // List Function
  //
  /////////////////////////////////////////////

  clearLists(): void {
    this.lists.length = 0;
  }
  
  loadLists(lists: List[], isClear: boolean): void {
    if (isClear) { this.clearLists(); }
    this.lists = this.lists.concat(lists);
    //concat = two array combine
  }
  
  getLists(): List[] {
    // console.log('?' + JSON.stringify(this.lists));
    return this.lists;
  }
  
  addList(list: List): void {
    this.lists.push(list);
    // console.log(list);
    // console.log(this.lists);
  }
  


  //////////////////////////////////////////////
  //
  // Card Function
  //
  /////////////////////////////////////////////

  clearCards(): void {
    //this.cards.length = 0;
    this.cardMap.clear();
  }
  
  loadCards(cards: Card[], isClear: boolean): void {
    if (isClear) { this.clearCards(); }
    //this.cards = this.cards.concat(cards);
    cards.forEach((card) => {
      if (this.cardMap.has(card.listId)){
        let target: Card[] = this.cardMap.get(card.listId);
        target.push(card);
      }else{
        let target: Card[] = [];
        target.push(card);
        this.cardMap.set(card.listId, target);
      }
    });

  }
  
  getCards(): Card[] {
    // console.log('?' + JSON.stringify(this.cards));
    return this.cards;
  }

  getCardsbyListId(listId: string): Card[] {
    //return _.filter(this.cards, {'listId': listId});
    return this.cardMap.get(listId);
  }

  addCard(card: Card): void {
    // this.cards.push(card);
    if (this.cardMap.has(card.listId)){
      let target: Card[] = this.cardMap.get(card.listId);
      target.push(card);
    }else{
      let target: Card[] = [];
      target.push(card);
      this.cardMap.set(card.listId, target);
    }
  }

  deleteCard(card: Card): void {
      let target: Card[] = this.cardMap.get(card.listId);
      const index = _.findIndex(target, { id: card.id });
      if (index < 0) { return; }
      target.splice(index, 1);
  }
}