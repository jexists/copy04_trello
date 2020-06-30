import { Component, OnInit } from '@angular/core';

import { Card } from '../../../core/models/index';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  
  card: Card[];
  isNewCard: boolean = false;
  constructor(

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

	onPropertyInit(): void{
		// this.newList = new List();
	}

	onFormGroupInit(): void{
		// this.newListForm = new FormGroup({
		// 	newListName: new FormControl(null, Validators.compose([
		// 			Validators.required,
		// 			Validators.minLength(1),
		// 			Validators.maxLength(100)
		// 		])),
		// });
	}


	//////////////////////////////////////////////////////////////////////////////////
	//
	//	 Component View Events Methods
	//
	//////////////////////////////////////////////////////////////////////////////////

	onToggleNewCard(): void {
		this.isNewCard = !this.isNewCard;
	}

	onValid(): boolean {
	// 	if (this.newListForm.get('newListName').valid) {
	// 		return true;
	// 	}
		return false;
	}

	//////////////////////////////////////////////////////////////////////////////////
	//
	//   Component CRUD Methods
	//
	//////////////////////////////////////////////////////////////////////////////////

	// onSubmit(target, $event): void {
	// 	$event.preventDefault();
	// 	$event.stopPropagation();

	// 	this.onCreateList(this.newList);
	// }

	// onCreateList(list: List): void {
	// 	console.log(this.newList);

	// 	this.newList.listTitle = this.newListForm.value.newListName;
	// 	this.newList.id = UUIDService.generateUUID();
	// 	this.newList.boardId = this.selBoard.id;
	// 	// this.newList.listPosNo = 5;

	// 	this.listService.createList(this.newList).subscribe(
	// 		res => {
	// 			// alert('성공');
	// 			this.isNewList = false;
	// 			this.selList.emit();
	// 			this.newListForm.get('newListName').setValue('');
	// 		},
	// 		error => {
	// 			alert('에러')
	// 		}
	// 	)
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
