import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { Board } from '../../../core/models/index';
import { BoardService } from '../../../core/apis/index';


// import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';

@Component({
  selector: 'app-new-board-modal',
  templateUrl: './new-board-modal.component.html',
  styleUrls: ['./new-board-modal.component.scss']
})
export class NewBoardModalComponent implements OnInit {

  boards: Board[];
  newBoardForm = new FormGroup({
    newTitle: new FormControl(''),
    // lastName: new FormControl(''),
  });

  constructor(
    private boardService: BoardService,
    private modalService: BsModalService

  ) { }

  ngOnInit(): void {
  }
  onClose(): void {

  }

  addBoard(boardTitle: string): void {
    boardTitle = boardTitle.trim();
    if(!boardTitle) {return;}
    this.boardService.addBoard({ boardTitle } as Board)
    .subscribe(board => {
      this.boards.push(board)
    })
  }

  onSubmit(): void {
    console.log(this.newBoardForm.value);
  }
}
