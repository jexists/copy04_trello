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

	boards: Board[];

	modalRef: BsModalRef;

	isStar: boolean;
	isViewed: boolean;
  
	constructor(
    	private boardService: BoardService,
    	private modalService: BsModalService
	) { }
	
  	//////////////////////////////////////////////////////////////////////////////////
    //
    //   Component Lifecycle Methods
    //
    //////////////////////////////////////////////////////////////////////////////////

	ngOnInit(): void {
		this.loadBoards();
	}
	
	ngOnDestroy(): void {

	}

	loadBoards(): void {
		this.boardService.loadBoards().subscribe(boards => this.boards = boards);
	}

    //////////////////////////////////////////////////////////////////////////////////
    //
    //   Component Data Manipulation Methods
    //
    //////////////////////////////////////////////////////////////////////////////////


    //////////////////////////////////////////////////////////////////////////////////
    //
    //   Component CRUD Methods
    //
    //////////////////////////////////////////////////////////////////////////////////


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
	
    onModalOpen($event):void {
		$event.preventDefault();
		$event.stopPropagation();

		this.modalRef = this.modalService.show( NewBoardModalComponent,
		);
	  }


}
