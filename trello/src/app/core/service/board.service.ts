import { Injectable } from '@angular/core';

import { Board } from '../model/board';
import { BOARDS } from '../mockup/mock-board';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  constructor() { }

  getBoards(): Board[] {
      return BOARDS;
  }
}
