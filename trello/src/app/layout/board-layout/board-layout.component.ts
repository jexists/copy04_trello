import { Component, OnInit } from '@angular/core';

import { BoardService } from '../../core/service/board.service';

@Component({
  selector: 'app-board-layout',
  templateUrl: './board-layout.component.html',
  styleUrls: ['./board-layout.component.scss']
})
export class BoardLayoutComponent implements OnInit {

  constructor(
    boardService: BoardService,
  ) { }

  ngOnInit(): void {
    this.getBoard();
  }

  getBoard(): void {
    // this.boardService.getBoard()
      // .subscribe(hero => this.hero = hero);
  }

  onModalOpen():void {
    console.log('haha');
    
  }

}
