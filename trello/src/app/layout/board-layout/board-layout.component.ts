import { Component, OnInit } from '@angular/core';


import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { BoardService } from '../../core/service/board.service';
import { NewBoardModalComponent } from '../../view/board/new-board-modal/new-board-modal.component'; 

@Component({
  selector: 'app-board-layout',
  templateUrl: './board-layout.component.html',
  styleUrls: ['./board-layout.component.scss']
})
export class BoardLayoutComponent implements OnInit {

  modalRef: BsModalRef;

  constructor(
    boardService: BoardService,
    private modalService: BsModalService
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
    this.modalRef = this.modalService.show( NewBoardModalComponent

    )
  }

}
