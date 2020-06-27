import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

// import * as _ from 'lodash';

import { Board } from '../../../core/models/index';
import { BoardService } from '../../../core/apis/index';
import { HdRepo, AdminRepo } from 'src/app/core/repos/index';
import { UUIDService } from '../../../core/service/index';
import { CardLayoutComponent } from 'src/app/layout/card-layout/card-layout.component';

@Component({
	selector: 'app-new-board-modal',
	templateUrl: './new-board-modal.component.html',
	styleUrls: ['./new-board-modal.component.scss']
})
export class NewBoardModalComponent implements OnInit, OnDestroy {

	@Input() selBoard: Board;

	selBg: any;
	selAccess: any;

	newBoardForm: FormGroup;

	constructor(
		public modalRef: BsModalRef,
		private boardService: BoardService,
		private hdRepo: HdRepo,
		public adminRepo: AdminRepo,
		private router: Router,
		private location: Location,
		// private modalService: BsModalService,
	) { 
		this.location = location;
	}

	//////////////////////////////////////////////////////////////////////////////////
	//
	//   Component Lifecycle Methods
	//
	//////////////////////////////////////////////////////////////////////////////////

	ngOnInit(): void {
		this.onFormGroupInit();
		this.onPropertyInit();
	}

	ngOnDestroy(): void {

	}
	//////////////////////////////////////////////////////////////////////////////////
	//
	//   Component Data Manipulation Methods
	//
	//////////////////////////////////////////////////////////////////////////////////

	onFormGroupInit(): void {
		this.newBoardForm = new FormGroup({
			newTitle: new FormControl(null, Validators.compose([
				Validators.required,
				Validators.minLength(1),
				Validators.maxLength(100)
			])),
		});
	}

	onPropertyInit(): void {
		this.selBoard = new Board();
	}

	//////////////////////////////////////////////////////////////////////////////////
	//
	//	 Component View Events Methods
	//
	//////////////////////////////////////////////////////////////////////////////////

	onSelAccess($event, access: any): void {
		$event.preventDefault();

		this.selAccess = access;
		this.selBoard.accessYN = this.selAccess.code;
	}

	onSelectBg(target): void {
		const boardColor = <HTMLElement>document.querySelector('.board-select');
		const selColor = getComputedStyle(target.parentNode).background;
		let activeMenu = <HTMLElement>document.querySelector('.click');

		if (target.parentNode.nodeName !== 'BUTTON') {
			return;
		} else if (activeMenu) {
			activeMenu.classList.remove('click');
		}

		boardColor.style.background = selColor;
		this.selBoard.boardBg = selColor;
		
		target.classList.add('click');
	}

	onHover($event): void {
		let hoverMenu = <HTMLElement>document.querySelector('.hover');

		if (!$event.childNodes[0] || $event.childNodes[0].nodeName !== 'SPAN') {
			return;
		} else if (hoverMenu) {
			hoverMenu.classList.remove('hover');
		}

		$event.childNodes[0].classList.add('hover');
	}

	onLeave($event): void {
		let hoverMenu = <HTMLElement>document.querySelector('.hover');
		if (hoverMenu){
			hoverMenu.classList.remove('hover');
		}
	}

	//////////////////////////////////////////////////////////////////////////////////
	//
	//   Component CRUD Methods
	//
	//////////////////////////////////////////////////////////////////////////////////

	onCreateBoard(board: Board): void {

		if (!this.selBoard.boardBg) {
			this.selBoard.boardBg = "url(https://images.unsplash.com/photo-1590952912024-520842ff2bf8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjcwNjZ9) no-repeat 50% 50% / cover";
		}

		if (!this.selBoard.accessYN) {
			this.selBoard.accessYN = "10";
		}

		this.selBoard.boardTitle = this.newBoardForm.value.newTitle;
		this.selBoard.id = UUIDService.generateUUID();
		this.selBoard.starYN = false;
		this.selBoard.userId = 'a7cdf232-e2f2-d6d8-4593-3e2cb68c9a4a';
		// this.hdRepo.addBoard(this.selBoard);
		
		this.boardService.createBoard(this.selBoard).subscribe(
			res => {
				this.onClose();
				this.router.navigate([`/card/${this.selBoard.id}`]);
			},
			error => {
				alert('에러');
			}
		)
	}

	onSubmit(target, $event): void {
		$event.preventDefault();
		$event.stopPropagation();

		this.onCreateBoard(this.selBoard);
	}

	//////////////////////////////////////////////////////////////////////////////////
	//
	//   Component View Event Methods
	//
	//////////////////////////////////////////////////////////////////////////////////

	onClose(): void {
		this.modalRef.hide();
	}

	onValid(): boolean {
		if (this.newBoardForm.get('newTitle').valid) {
			return true;
		}
		return false;
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
