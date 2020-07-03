import { Component, OnInit, Input } from '@angular/core';
import { CardService } from 'src/app/core/apis';

import { HdRepo } from 'src/app/core/repos';
import { List } from 'src/app/core/models';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() selList: List;
  constructor(
		// protected toastService: ToastrService,
		private cardService: CardService,
		public hdRepo: HdRepo,
	) {
		// super(toastService);
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
		const listId = this.selList.id;
		console.log(listId);
		
		this.cardService.loadCardsByListId(listId).subscribe();

	}

	onFormGroupInit(): void {
		// console.log("####" + this.selList);
		// console.log("####" + JSON.stringify(this.selList.id));
		// console.log("####" + JSON.stringify(this.selList.listTitle));
		// this.editListTitle = new FormControl(this.selList.listTitle, Validators.compose([
		// 	Validators.required,
		// 	Validators.minLength(1),
		// 	Validators.maxLength(100)
		// ]));
	}


	//////////////////////////////////////////////////////////////////////////////////
	//
	//	 Component View Events Methods
	//
	//////////////////////////////////////////////////////////////////////////////////


	onBlurListTitle(): void {
		// if (this.editListTitle.hasError('isEmpty')) {
		// 	this.ngOnInit();
		// 	return;
		// }

		// if (this.selList.listTitle === this.editListTitle.value) { return; }

		// this.selList.listTitle = this.editListTitle.value;

		// this.onUpdateListTitle();
	}




	//////////////////////////////////////////////////////////////////////////////////
	//
	//   Component CRUD Methods
	//
	//////////////////////////////////////////////////////////////////////////////////

	// onUpdateListTitle(): void { 	

	// 	this.listService.updateListTitle(this.selList, this.selList.id).subscribe(
	// 		res => {
	// 			this.showSuccess(null, '리스트 제목이 수정되었습니다.');
	// 		},
	// 		error => {
	// 			if (error.status === 403 || error.status === 504) {
	// 				alert('404 error')
	// 				return;
	// 			}
	// 			alert('error');
	// 		}
	// 	);
	// }

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
