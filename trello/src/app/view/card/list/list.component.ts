import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { List } from '../../../core/models/index';
import { ListService, CardService } from '../../../core/apis/index';
import { HdRepo, AdminRepo } from 'src/app/core/repos';

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {

	@Input() selList: List;

	editListTitle: FormControl;

	constructor(
		private listService: ListService,
		private cardService: CardService,
		public hdRepo: HdRepo,
	) {
		// this.selList = List
	}

	//////////////////////////////////////////////////////////////////////////////////
	//
	//   Component Lifecycle Methods
	//
	//////////////////////////////////////////////////////////////////////////////////

	ngOnInit(): void {
		this.loadCards();

		this.onFormGroupInit();
		// this.onPropertyInit();

	}

	ngOnDestroy(): void {

	}

	//////////////////////////////////////////////////////////////////////////////////
	//
	//   Component Data Manipulation Methods
	//
	//////////////////////////////////////////////////////////////////////////////////

	loadCards(): void {
		const listId = '';
		this.cardService.loadCardsByListId(listId).subscribe();

	}

	onFormGroupInit(): void {
		// console.log("####" + this.selList);
		// console.log("####" + JSON.stringify(this.selList));
		// console.log("####" + JSON.stringify(this.selList.listTitle));
		this.editListTitle = new FormControl(this.selList.listTitle, Validators.compose([
			Validators.required,
			Validators.minLength(1),
			Validators.maxLength(100)
		]));
	}


	//////////////////////////////////////////////////////////////////////////////////
	//
	//	 Component View Events Methods
	//
	//////////////////////////////////////////////////////////////////////////////////


	onBlurListTitle(): void {
		if (this.editListTitle.hasError('isEmpty')) {
			this.ngOnInit();
			return;
		}

		if (this.selList.listTitle === this.editListTitle.value) { return; }

		this.selList.listTitle = this.editListTitle.value;

		this.onUpdateListTitle();
	}




	//////////////////////////////////////////////////////////////////////////////////
	//
	//   Component CRUD Methods
	//
	//////////////////////////////////////////////////////////////////////////////////

	onUpdateListTitle(): void { 	

		this.listService.updateListTitle(this.selList, this.selList.id).subscribe(
			res => {
				// this.showSuccess(null, '제목이 수정되었습니다.');
				alert('성공')
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
