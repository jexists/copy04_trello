import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

// import * as _ from 'lodash';

import { Board } from '../../../core/models/index';
import { BoardService } from '../../../core/apis/index';
import { HdRepo } from 'src/app/core/repos/index';


@Component({
	selector: 'app-new-board-modal',
	templateUrl: './new-board-modal.component.html',
	styleUrls: ['./new-board-modal.component.scss']
})
export class NewBoardModalComponent implements OnInit {


	@Input() selBoard: Board;

	// selBg: string;
	newBoardForm: FormGroup;

	constructor(
		public modalRef: BsModalRef,
		private boardService: BoardService,
		private modalService: BsModalService,
		private hdRepo: HdRepo
	) { }

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
		// this.newBoardForm.get('newTitle').valueChanges.subscribe(val => {
		//     this.selBoard.boardTitle = val;
		// });
	}

	onPropertyInit(): void {
		this.selBoard = null;

	}
	//////////////////////////////////////////////////////////////////////////////////
	//
	//	 Component View Events Methods
	//
	//////////////////////////////////////////////////////////////////////////////////

	
	//모달창이 나왔음 -> 타이틀 적음 (버튼 활성화 생성가능)
	// -> 공개/비공개 드롭박스 설정 -> 배경색 지정 -> 버튼(create)클릭
	//valid 체크(타이틀 적었는지 유무) -false -> 버튼 비활성 
	//valid 체크(타이틀 적었는지 유무) -true -> 버튼 활성
	//onSubmit -> onCreateBoard -> hdRepo.addBoard
	//?... 데이터 모음..? 배경색이랑.. 공개비공개.. 제목 
	/////////////////////////

	private = true;
	public = false;
	onSelAccess($event, target: boolean): void {
		$event.preventDefault();
		$event.stopPropagation();

		console.log($event);
		console.log(target);
		
		// this.selBoard.accessYN = target;
		
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
		// this.selBoard.boardBg = selColor;

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
		this.selBoard.accessYN = false
		this.selBoard.boardBg = ''
		this.selBoard.boardTitle = ''
		this.selBoard.boardUUID = 11;
		this.selBoard.id = 1;
		this.selBoard.starYN = false;
		
		this.hdRepo.addBoard(board);


	}

	onSubmit(target, $event): void {
		$event.preventDefault();
		$event.stopPropagation();

		console.log(this.onValid());
		alert(`제출 ${JSON.stringify(this.newBoardForm.value)}`)

		let newBoard = null;

		// newBoard = newBoard();
		// newBoard.

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
