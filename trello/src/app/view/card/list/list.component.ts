import { Component, OnInit, Input, SimpleChanges, OnChanges, OnDestroy, ElementRef, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { DragulaService } from 'ng2-dragula';
import { ToastrService } from 'ngx-toastr';

import { Board, List } from '../../../core/models/index';
import { BoardService, ListService } from '../../../core/apis/index';
import { HdRepo, AdminRepo } from 'src/app/core/repos';
import { BaseComponent } from 'src/app/core/components/index';
import { UUIDService } from 'src/app/core/service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {

  @Input() selBoard: Board;
  @Input() isNewList: boolean;
	@Input() lists: List[];

	selList: List;

	// isNewList: boolean = false;

	newListForm: FormGroup;

	constructor(
		// protected toastService: ToastrService,
		private listService: ListService,
		private route: ActivatedRoute,
		private location: Location,
		public adminRepo: AdminRepo,
		public hdRepo: HdRepo,
		// private elementRef: ElementRef,
	) {
		// super(toastService);
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

	onPropertyInit(): void{
		this.selList = new List();
	}

	onFormGroupInit(): void{
		this.newListForm = new FormGroup({
			newListName: new FormControl(null, Validators.compose([
					Validators.required,
					Validators.minLength(1),
					Validators.maxLength(100)
				])),
		});
	}


	//////////////////////////////////////////////////////////////////////////////////
	//
	//	 Component View Events Methods
	//
	//////////////////////////////////////////////////////////////////////////////////

	onToggleNewList(): void {
		this.isNewList = !this.isNewList;
	}

	onValid(): boolean {
		if (this.newListForm.get('newListName').valid) {
			return true;
		}
		return false;
	}

	//////////////////////////////////////////////////////////////////////////////////
	//
	//   Component CRUD Methods
	//
	//////////////////////////////////////////////////////////////////////////////////

	onSubmit(target, $event): void {
		$event.preventDefault();
		$event.stopPropagation();

		this.onCreateList(this.selList);
	}

	onCreateList(list: List): void {
		console.log(this.selList);

		this.selList.id = UUIDService.generateUUID();
		this.selList.listTitle = this.newListForm.value.newListName;
		this.selList.listPosNo = 5;
		this.selList.boardId = this.selBoard.id;

		this.listService.createList(this.selList).subscribe(
			res => {
				alert('성공');
				// this.loadLists();
				// this.lists = this.hdRepo.getLists();
				this.isNewList = false;
				// this.listForm.value.newListName = "";
			},
			error => {
				alert('에러')
			}
		)
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