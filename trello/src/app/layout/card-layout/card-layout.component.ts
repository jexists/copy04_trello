import { Component, OnInit, Input, SimpleChanges, OnChanges, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

// import { DragulaService } from 'ng2-dragula';

import { Board, List } from '../../core/models/index';
import { BoardService, ListService } from '../../core/apis/index';
import { AdminRepo } from 'src/app/core/repos';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
	selector: 'app-card-layout',
	templateUrl: './card-layout.component.html',
	styleUrls: ['./card-layout.component.scss']
})
export class CardLayoutComponent implements OnInit, OnChanges, OnDestroy {

	@Input() selBoard: Board;

	lists: List[];
	editBoardForm: FormGroup;

	// selAccess: 
	constructor(
		private boardService: BoardService,
		private listService: ListService,
		private route: ActivatedRoute,
		private location: Location,
		private adminRepo: AdminRepo,
		// private dragula: DragulaService
	) { }


	//////////////////////////////////////////////////////////////////////////////////
	//
	//   Component Lifecycle Methods
	//
	//////////////////////////////////////////////////////////////////////////////////

	ngOnInit(): void {
		this.loadBoard();
		this.onFormGroupInit();
		this.loadBgColor();
		this.loadIcon();
		this.loadList();
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
		this.editBoardForm = new FormGroup({
			editTitle: new FormControl(this.selBoard.boardTitle, Validators.compose([
				Validators.required,
				Validators.minLength(1),
				Validators.maxLength(100)
			])),
		});
	}

	ngOnChanges(changes: SimpleChanges) {
		setTimeout(() => {
				if (!changes['selBoard'].isFirstChange()) {
						this.ngOnInit();
				}
		}, 10);
	}

	onPropertyInit(): void {
		this.selBoard = new Board();
		// this.selBoard = this.adminRepo.getAccessCode({'value':this.selBoard.accessYN})
	}
	loadBoard(): void {
		const boardUUID = +this.route.snapshot.paramMap.get('boardUUID');

		this.boardService.loadBoardByUUID(boardUUID).subscribe(selBoard => this.selBoard = selBoard);
		
		if (this.selBoard.accessYN === "10") {
			this.selBoard.accessYN = "private";
		} else if (this.selBoard.accessYN === "20") {
			this.selBoard.accessYN = "public";
		}
	}
	
	loadBgColor(): void {
		const wrapColor = <HTMLElement>document.querySelector('#wrap');
		wrapColor.style.background = this.selBoard.boardBg;
		
		const headColor = <HTMLElement>document.querySelector('#headBox');
		headColor.style.background = 'rgba(0, 0, 0, 0.3)';
	}
	loadIcon(): void {
		setTimeout(function (){
			let accessPublic = <HTMLElement>document.querySelector('i.public');
			let accessPrivate = <HTMLElement>document.querySelector('i.private');

			if(accessPublic){
				accessPublic.classList.add('fas', 'fa-globe-americas');
			}
			if(accessPrivate){
				accessPrivate.classList.add('fas', 'fa-lock');
			}
		},300)
	}

	loadList(): void {
		// const UUID = +this.route.snap
		// this.listService.getLists()
		// .subscribe(lists => this.lists = lists)
	}

	// save(): void {
	// 	this.boardService.updateBoardTitle(this.selBoard)
	// 		.subscribe();
	// }

	//////////////////////////////////////////////////////////////////////////////////
  //
  //	 Component View Events Methods
  //
	//////////////////////////////////////////////////////////////////////////////////
	
	onBlurBoardTitle(): void {
		if (this.editBoardForm.get('editTitle').hasError('isEmpty')) {
			this.ngOnInit();
			return;
		}

	if (this.selBoard.boardTitle === this.editBoardForm.get('editTitle').value) { return; }

	this.selBoard.boardTitle = this.editBoardForm.get('editTitle').value;
	console.log(this.selBoard.boardTitle);
	
	this.onUpdateTitle();
	}
	//////////////////////////////////////////////////////////////////////////////////
	//
	//   Component CRUD Methods
	//
	//////////////////////////////////////////////////////////////////////////////////

	onUpdateTitle(): void {
		this.boardService.updateBoardTitle(this.selBoard).subscribe(
            res => {
				alert('성공');
            },
            error => {
				alert('error');
            }
        );
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
