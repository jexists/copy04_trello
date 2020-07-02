import { Component, OnInit } from '@angular/core';

import { Card } from '../../../core/models/index';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-new-card',
  templateUrl: './new-card.component.html',
  styleUrls: ['./new-card.component.scss']
})
export class NewCardComponent implements OnInit {
  
	card: Card[];
	newCard: Card;

	newCardForm: FormGroup;
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
		this.newCard = new Card();
	}

	onFormGroupInit(): void{
		this.newCardForm = new FormGroup({
			newCardName: new FormControl(null, Validators.compose([
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

	onSubmit(target, $event): void {
		$event.preventDefault();
		$event.stopPropagation();

		this.onCreateCard(this.newCard);
	}

	onCreateCard(card: Card): void {
		console.log(this.newCard);

		// this.newCard.cardTitle = this.newCardForm.value.newCardName;
		// this.newCard.id = UUIDService.generateUUID();
		// this.newCard.boardId = this.selBoard.id;
		// this.newCard.listPosNo = 5;

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
