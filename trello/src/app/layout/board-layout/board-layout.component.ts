import { Component, OnInit } from '@angular/core';


import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { ToastrService } from 'ngx-toastr';

import { Board } from '../../core/models/index';
import { BoardService } from '../../core/apis/index';

import { NewBoardModalComponent } from '../../view/board/new-board-modal/new-board-modal.component';
import { HdRepo } from 'src/app/core/repos';
import { forkJoin } from 'rxjs';

@Component({
	selector: 'app-board-layout',
	templateUrl: './board-layout.component.html',
	styleUrls: ['./board-layout.component.scss']
})
export class BoardLayoutComponent implements OnInit {

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

	// 데이터 초기화 :  유저 아이디로 
	ngOnInit(): void {
		this.loadBgColor();

		this.onDataInit();
	}

	// 데이터 자원반환
	ngOnDestroy(): void {
		this.hdRepo.clearAll();
	}

	onDataInit(): void {
		forkJoin([
			this.boardService.loadBoardByUserId('a7cdf232-e2f2-d6d8-4593-3e2cb68c9a4a')
		])
		.subscribe(
			res => {
				
			},
			error => {
				alert(error);
			}
		)
		
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
