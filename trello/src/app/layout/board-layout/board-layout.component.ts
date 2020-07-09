import { Component, OnInit } from '@angular/core';


import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { ToastrService } from 'ngx-toastr';

import { Board } from '../../core/models/index';
import { BoardService } from '../../core/apis/index';

import { NewBoardModalComponent } from '../../view/board/new-board-modal/new-board-modal.component';
import { HdRepo } from 'src/app/core/repos';

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
		public hdRepo: HdRepo,
		// private toastr: ToastrService
	) { }

	//////////////////////////////////////////////////////////////////////////////////
	//
	//   Component Lifecycle Methods
	//
	//////////////////////////////////////////////////////////////////////////////////


	ngOnInit(): void {
		this.loadBoardByUserId();
		this.loadBgColor();

		this.onDataInit();
	}

	ngOnDestroy(): void {

	}

	

	loadBoards(): void {
		this.boardService.loadBoards().subscribe(boards => this.boards = boards);
	}

	loadBoardsByTeamId(): void {
		this.boardService.loadBoardByTeamId('325ee323-5fa7-fffb-c123-3b9b130060c2').subscribe();
	}

	loadBoardByUserId(): void {
		this.boardService.loadBoardByUserId('a7cdf232-e2f2-d6d8-4593-3e2cb68c9a4a').subscribe();
	}

	onDataInit(): void {
		// if (this.hdRepo.findBoardsStar({'starYN':true})) {
		// 	this.isStar = true;	
		// } else {
		// 	this.isStar = false;
		// }
		this.hdRepo.findBoardsStar({'starYN':true}) ?
			this.isStar = true : this.isStar = false;
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

	onSelStar(): void {
		// console.log($event.target);
		// console.log('##' + this.selBoard.starYN);
		
		// $event.target.classList.toggle('active');

		// this.selBoard.starYN = !this.board.starYN;

		// this.onUpdateBoardStar();
	}
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

		this.modalRef = this.modalService.show(NewBoardModalComponent,
			{ 'initialState': { 'selBoard': null } }
		);

		const subscriber = this.modalService.onHide.subscribe(
			res => {
				subscriber.unsubscribe();
			}
		);
	}





}
