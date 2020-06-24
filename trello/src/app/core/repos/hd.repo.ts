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
  
  //Repo 삭제
  clearAll(): void {
    this.clearBoards();
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

  
  loadBoards(boards: Board[], isClear: boolean): void {
    if (isClear) { this.clearBoards(); }
    this.boards = this.boards.concat(boards);
    //concat = two array combine
  }

  findBoardByID(cond: any): Board {
    // if (isClear) { this.clearBoards(); }
    return _.find(this.boards, cond);
  }

  getBoard():Board{
    return this.boards[0];
  }

  
  getBoards(): Board[] {
    return this.boards;
  }

  getBoardById(): Board {
    return _.sortBy(this.boards,['id']);
  }

  addBoard(board: Board): void {
    this.boards.push(board);
    //push = add item to the end
  }

  editBoard(board: Board): void {
    const index = _.findIndex(this.boards, { boardUUID: board.id });
    this.boards[index] = board;
  }

  removeBoard(board: Board): void {
    // this.boards.pop(board)
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
    return this.lists;
  }

  //////////////////////////////////////////////
  //
  // Card Function
  //
  /////////////////////////////////////////////


}