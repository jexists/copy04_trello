import { Component, OnInit } from '@angular/core';


import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { Board } from '../../core/models/index';
import { BoardService } from '../../core/apis/index';

import { NewBoardModalComponent } from '../../view/board/new-board-modal/new-board-modal.component'; 

@Component({
  selector: 'app-board-layout',
  templateUrl: './board-layout.component.html',
  styleUrls: ['./board-layout.component.scss']
})
export class BoardLayoutComponent implements OnInit {

  // boards: Board[] = [];
  boards: Board[];
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

  // getBoard(): void {
  //   this.boards = this.boardService.getBoards();
  // }

  getBoard(): void {
    this.boardService.getBoards()
    .subscribe(boards => this.boards = boards);
  }

  onModalOpen($event):void {
    $event.preventDefault();

    console.log('haha');
    this.modalRef = this.modalService.show( NewBoardModalComponent
    )
  }

  // addBoard(boardTitle: string): void {
  //   boardTitle = boardTitle.trim();
  //   if(!boardTitle) {return;}
  //   this.boardService.addBoard({ boardTitle } as Board)
  //   .subscribe(board => {
  //     this.boards.push(board)
  //   })
  // }

}
