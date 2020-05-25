import { Component, OnInit } from '@angular/core';


import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { Board } from '../../core/model/index';
import { BoardService } from '../../core/service/index';

import { NewBoardModalComponent } from '../../view/board/new-board-modal/new-board-modal.component'; 

@Component({
  selector: 'app-board-layout',
  templateUrl: './board-layout.component.html',
  styleUrls: ['./board-layout.component.scss']
})
export class BoardLayoutComponent implements OnInit {

  boards: Board[] = [];
  modalRef: BsModalRef;

  isStar: boolean;
  isViewed: boolean;
  
  constructor(
    private boardService: BoardService,
    private modalService: BsModalService
  ) { }

  ngOnInit(): void {
    this.getBoard();
  }

  getBoard(): void {
    this.boards = this.boardService.getBoards()
  }

  onModalOpen():void {
    console.log('haha');
    this.modalRef = this.modalService.show( NewBoardModalComponent

    )
  }

}
