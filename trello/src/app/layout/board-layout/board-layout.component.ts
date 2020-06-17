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
	
	////////////
	//해야할것
	//[주일]생성&삭제 로그 클라이언트 뷰로 보여지기
	//[o]모달배경 클릭안햇을경우 기본값지정해주기 
	//[에러]board 삭제 & 수정/업데이트
	//[]list 생성 & 수정 & 삭제
	//[]card 생성 & 수정 & 삭제
	//[]list & card dragula (이동)
	//[]만든후 에 보드 자동으로 넘어가기 (location)
	//[o]UUID 만들기
	//[???]보드 클릭햇을때 id로 불러오는것말고 UUID로 불러오기

	ngOnInit(): void {
		this.loadBoards();
		this.loadBgColor();
		
	}
	
	ngOnDestroy(): void {

	}

	loadBoards(): void {
    	this.boardService.loadBoards().subscribe(boards => this.boards = boards);
      	// this.boardService.loadBoards()
	}

	loadBgColor(): void {
		const wrapColor = <HTMLElement>document.querySelector('#wrap');
		const headColor = <HTMLElement>document.querySelector('#headBox');
		
		wrapColor.style.background = '#fff';
		headColor.style.background = '#006aa6';
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
    
    const subscriber = this.modalService.onHide.subscribe(
      	res => {
          subscriber.unsubscribe();
          this.loadBoards();
          // if (this.modalRef.content.data !== 'OK') { return; }

      	}
    );
	}

	

}
