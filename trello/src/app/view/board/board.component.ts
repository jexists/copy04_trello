import { Component, OnInit } from '@angular/core';

import { Board } from '../../core/model/board';
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  
  board: Board;
  // boardTitle: ;
  constructor(

  ) { }

  ngOnInit(): void {
  }

}
