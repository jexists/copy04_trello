import { Component, OnInit } from '@angular/core';

import { Board } from '../../core/model/board';
import { BOARDS } from '../../core/mockup/mock-board';
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  // board: Board;
  // boardTitle: ;
  board: Board = {
    boardUUID: 11, 
    boardTitle: 'Test board', 
    boardBg: '#fff'
  };

  boards = BOARDS;
  constructor(

  ) { }

  ngOnInit(): void {
  }

}
