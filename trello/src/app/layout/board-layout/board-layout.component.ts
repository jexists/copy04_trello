import { Component, OnInit } from '@angular/core';


import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';

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
  selBoard: Board;
	modalRef: BsModalRef;

	isStar: boolean;
	isViewed: boolean;
  
	constructor(
    	private boardService: BoardService,
      	private modalService: BsModalService,
      	// private toastr: ToastrService
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
    	// this.boardService.loadBoards()
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
	
    onModalOpen($event): void {
		$event.preventDefault();
		$event.stopPropagation();

    this.modalRef = this.modalService.show( NewBoardModalComponent,
      {'initialState':{'selBoard':null}}
		);
	  }


}
