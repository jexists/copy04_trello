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
  
  clearAll(): void {
    this.clearBoards();
  }

  //////////////////////////////////////////////
  //
  //  Board Function
  //
  /////////////////////////////////////////////

  clearBoards(): void {
    this.boards.length = 0;
  }


  loadBoards(boards: Board[], isClear: boolean): void {
    if (isClear) { this.clearBoards(); }
    this.boards = this.boards.concat(boards);
    //concat = two array combine
  }

  getBoards(): Board[] {
    return this.boards;
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
    const index = _.findIndex(this.boards, { boardUUID: board.id });
        if (index < 0) { return; }
        this.boards.splice(index, 1);
  }




  //////////////////////////////////////////////
  //
  // List Function
  //
  /////////////////////////////////////////////


  //////////////////////////////////////////////
  //
  // Card Function
  //
  /////////////////////////////////////////////


}