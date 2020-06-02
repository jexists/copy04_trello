import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

// import * as _ from 'lodash';

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
		public modalRef: BsModalRef,
    	private boardService: BoardService,
    	private modalService: BsModalService
	) { }

    //////////////////////////////////////////////////////////////////////////////////
    //
    //   Component Lifecycle Methods
    //
    //////////////////////////////////////////////////////////////////////////////////

	ngOnInit(): void {
	}

	ngOnDestroy(): void {

	}
    //////////////////////////////////////////////////////////////////////////////////
    //
    //   Component Data Manipulation Methods
    //
    //////////////////////////////////////////////////////////////////////////////////

    //////////////////////////////////////////////////////////////////////////////////
    //
    //	 Component View Events Methods
    //
	  //////////////////////////////////////////////////////////////////////////////////

    
    onSelectBg($event): void {
      const boardColor = <HTMLElement>document.querySelector('.board-select');
      const selColor = getComputedStyle($event).background;
      boardColor.style.background = selColor;
    }
    //////////////////////////////////////////////////////////////////////////////////
    //
    //   Component CRUD Methods
    //
    //////////////////////////////////////////////////////////////////////////////////


	
  
	addBoard(boardTitle: string): void {
	  // boardTitle = boardTitle.trim();
	  // if(!boardTitle) {return;}
	  // this.boardService.loadBoard({ boardTitle } as Board)
	  // .subscribe(board => {
	  //   this.boards.push(board)
	  // })
	}
  
	onSubmit(): void {
	  console.log(this.newBoardForm.value);
	}
	
    //////////////////////////////////////////////////////////////////////////////////
    //
    //   Component View Event Methods
    //
	//////////////////////////////////////////////////////////////////////////////////
	
	onClose(): void {
		this.modalRef.hide();
	}

    //////////////////////////////////////////////////////////////////////////////////
    //
    //   Component Subscription Methods
    //
    //////////////////////////////////////////////////////////////////////////////////

    //////////////////////////////////////////////////////////////////////////////////
    //
    //   Component Private Methods
    //
    //////////////////////////////////////////////////////////////////////////////////
}
