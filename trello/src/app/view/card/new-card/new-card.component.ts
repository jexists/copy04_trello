import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

import { Card, List } from '../../../core/models/index';
import { UUIDService } from 'src/app/core/service';
import { CardService } from 'src/app/core/apis';

@Component({
  selector: 'app-new-card',
  templateUrl: './new-card.component.html',
  styleUrls: ['./new-card.component.scss']
})
export class NewCardComponent implements OnInit {

  @Output() selCard = new EventEmitter;
	@Input() selList: List;
	card: Card[];
	newCard: Card;

	newCardForm: FormGroup;
	isNewCard: boolean = false;
	
  constructor(
		private cardService: CardService,
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
		if (this.newCardForm.get('newCardName').valid) {
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

		this.onCreateCard(this.newCard);
	}

	onCreateCard(card: Card): void {
		
		this.newCard.cardTitle = this.newCardForm.value.newCardName;
		this.newCard.id = UUIDService.generateUUID();
		this.newCard.boardId = this.selList.boardId;
		this.newCard.listId = this.selList.id;
		this.newCard.cardPosNo = 5;
		console.log(this.newCard);

		this.cardService.createCard(this.newCard).subscribe(
			res => {
				// alert('성공');
				this.isNewCard = false;
				this.selCard.emit();
				this.newCardForm.get('newCardName').setValue('');
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
