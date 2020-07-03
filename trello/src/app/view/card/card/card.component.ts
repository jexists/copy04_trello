import { Component, OnInit, Input } from '@angular/core';
import { CardService } from 'src/app/core/apis';

import { HdRepo } from 'src/app/core/repos';
import { Card } from 'src/app/core/models';
import { Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

	@Input() selCard: Card;
	
	editCardTitle: FormControl;
	
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

	onFormGroupInit(): void {
		console.log("####" + JSON.stringify(this.selCard.cardTitle));
		this.editCardTitle = new FormControl(this.selCard.cardTitle, Validators.compose([
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
