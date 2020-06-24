import { Component, OnInit, Input, SimpleChanges, OnChanges, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { DragulaService } from 'ng2-dragula';
import { ToastrService } from 'ngx-toastr';

import { Board, List } from '../../core/models/index';
import { BoardService, ListService } from '../../core/apis/index';
import { HdRepo, AdminRepo } from 'src/app/core/repos';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BaseComponent } from 'src/app/core/components/index';

@Component({
	selector: 'app-card-layout',
	templateUrl: './card-layout.component.html',
	styleUrls: ['./card-layout.component.scss']
})
export class CardLayoutComponent extends BaseComponent implements OnInit, OnChanges, OnDestroy {

	@Input() selBoard: Board;
	@Input() lists: List[];

	boards: Board[];
	selAccess: any;

	// lists: List[];
	selList: List;

	editBoardForm: FormGroup;

	constructor(
		private boardService: BoardService,
		protected toastService: ToastrService,
		private listService: ListService,
		private route: ActivatedRoute,
		private location: Location,
		public adminRepo: AdminRepo,
		public hdRepo: HdRepo,
		private dragula: DragulaService
	) {
		super(toastService);
	 }


	//////////////////////////////////////////////////////////////////////////////////
	//
	//   Component Lifecycle Methods
	//
	//////////////////////////////////////////////////////////////////////////////////

	ngOnInit(): void {
		this.loadBoard();
		this.loadLists();
		

		this.onFormGroupInit();
		// this.onDataInit();
		// this.onPropertyInit();

		this.loadBgColor();
		this.loadIcon();
		
	}

	ngOnDestroy(): void {

	}

	//////////////////////////////////////////////////////////////////////////////////
	//
	//   Component Data Manipulation Methods
	//
	//////////////////////////////////////////////////////////////////////////////////

	onDataInit(): void{

	}
	onPropertyInit(): void{
		
	}

	
	onFormGroupInit(): void{
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


	loadBoard(): void {
		const boardId = this.route.snapshot.paramMap.get('id');
		
		this.boardService.loadBoardById(boardId).subscribe(
			selBoard => this.selBoard = selBoard[0]);

		// console.log('$$$$$' + JSON.stringify(this.selBoard));
		
		if (this.selBoard.accessYN === "10") {
			this.selBoard.accessYN = "private";
		} else if (this.selBoard.accessYN === "20") {
			this.selBoard.accessYN = "public";
		}
	}

	loadLists(): void {
		const boardId = this.route.snapshot.paramMap.get('id');
		
		this.listService.loadListsByBoardId(boardId).subscribe();
		// console.log(this.selList);
		this.lists = this.hdRepo.getLists();
		console.log(this.lists);

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
	
		this.onUpdateTitle();
	}

	onSelAccess($event, access: any): void {
		$event.preventDefault();

		this.selAccess = access;
		this.selBoard.accessYN = this.selAccess.code;
	}

	//////////////////////////////////////////////////////////////////////////////////
	//
	//   Component CRUD Methods
	//
	//////////////////////////////////////////////////////////////////////////////////

	onUpdateTitle(): void {
		const boardId = this.route.snapshot.paramMap.get('id');
		
		this.boardService.updateBoardTitle(this.selBoard, boardId).subscribe(
            res => {
				this.showSuccess(null, '제목이 수정되었습니다.')
            },
            error => {
				if (error.status === 403 || error.status === 504) {
                    alert('404 error')
                    return;
                }
				alert('error');
            }
        );
	}

	onArchive($event): void {
		$event.preventDefault();
		$event.stopPropagation();

		const boardId = this.route.snapshot.paramMap.get('id');

		this.boardService.deleteBoard(this.selBoard, boardId).subscribe(
			res => {
				this.showSuccess('', '삭제되었습니다.');
				this.location.back();
			},
			error => {
				this.showError(null, 'Board 삭제 시 오류가 발생하였습니다.')
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
