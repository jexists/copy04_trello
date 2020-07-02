import { Component, OnInit, Input, SimpleChanges, OnChanges, OnDestroy, ElementRef, HostListener, EventEmitter, Output } from '@angular/core';
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
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.scss']
})
export class NewListComponent implements OnInit, OnDestroy {

	@Output() selList = new EventEmitter;

  @Input() selBoard: Board;
  @Input() isNewList: boolean;

	newList: List;

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
		this.newList = new List();
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

		this.onCreateList(this.newList);
	}

	onCreateList(list: List): void {
		console.log(this.newList);

		this.newList.listTitle = this.newListForm.value.newListName;
		this.newList.id = UUIDService.generateUUID();
		this.newList.boardId = this.selBoard.id;
		// this.newList.listPosNo = 5;

		this.listService.createList(this.newList).subscribe(
			res => {
				this.isNewList = false;
				this.selList.emit();
				this.newListForm.get('newListName').setValue('');
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