import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Board, List } from '../../../core/models/index';
import { AdminRepo, HdRepo } from 'src/app/core/repos';
import { ListService } from 'src/app/core/apis';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UUIDService } from 'src/app/core/service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit,OnDestroy {

  @Input() selBoard: Board;
	@Input() lists: List[];

	selList: List;

	isNewList: boolean = false;

	listForm: FormGroup;

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
		// this.onDataInit();
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
		this.selList = new List();
	}

	
	onFormGroupInit(): void{

		this.listForm = new FormGroup({
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

	
  
	//////////////////////////////////////////////////////////////////////////////////
	//
	//   Component CRUD Methods
	//
	//////////////////////////////////////////////////////////////////////////////////


	onCreateList(list: List): void {
		console.log(this.selList);
		
		this.selList.id = UUIDService.generateUUID();
		this.selList.boardId = this.selBoard.id;
		this.selList.listTitle = this.listForm.value.newListName;
		this.selList.listPosNo = 5;

		this.listService.createList(this.selList).subscribe(
			res => {
				alert('성공');
				// this.loadLists();
				this.lists = this.hdRepo.getLists();
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