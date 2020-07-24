import { Component, OnInit, Input } from '@angular/core';
import { DatePipe } from '@angular/common';

import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

import { Card, List } from 'src/app/core/models';
import { HdRepo } from 'src/app/core/repos';
import { CardService } from 'src/app/core/apis';

@Component({
  selector: 'app-modal-card',
  templateUrl: './modal-card.component.html',
  styleUrls: ['./modal-card.component.scss']
})
export class ModalCardComponent implements OnInit {

	selList: List;
	selCard: Card;
	
	etcMaxRows: number = 5;

	
	constructor(
		public modalRef: BsModalRef,
		private hdRepo: HdRepo,
		private datePipe: DatePipe,
		private cardService: CardService,
		private modalService: BsModalService,
	) { 
	}

	//////////////////////////////////////////////////////////////////////////////////
	//
	//   Component Lifecycle Methods
	//
	//////////////////////////////////////////////////////////////////////////////////

	ngOnInit(): void {
		this.onFormGroupInit();
		this.onPropertyInit();
		// console.log(this.selCard);
		this.selList = this.hdRepo.findListByListId({'id':this.selCard.listId});
		
		console.log(this.selList);
		
	}

	ngOnDestroy(): void {

	}
	//////////////////////////////////////////////////////////////////////////////////
	//
	//   Component Data Manipulation Methods
	//
	//////////////////////////////////////////////////////////////////////////////////

	onFormGroupInit(): void {
		// this.newBoardForm = new FormGroup({
		// 	newTitle: new FormControl(null, Validators.compose([
		// 		Validators.required,
		// 		Validators.minLength(1),
		// 		Validators.maxLength(100)
		// 	])),
		// });
	}

	onPropertyInit(): void {

	}

	//////////////////////////////////////////////////////////////////////////////////
	//
	//	 Component View Events Methods
	//
	//////////////////////////////////////////////////////////////////////////////////


	//////////////////////////////////////////////////////////////////////////////////
	//
	//   Component CRUD Methods
	//
	//////////////////////////////////////////////////////////////////////////////////

	onArchive($event): void {
    $event.preventDefault();
    $event.stopPropagation();

    this.cardService.deleteCard(this.selCard, this.selCard.id).subscribe(
      res => {
        // this.showSuccess('', '삭제되었습니다.');
        this.onClose();
      },
      error => {
        // this.showError(null, 'Board 삭제 시 오류가 발생하였습니다.')
      }
    );
  }


	//////////////////////////////////////////////////////////////////////////////////
	//
	//   Component View Event Methods
	//
	//////////////////////////////////////////////////////////////////////////////////

	onClose(): void {
		this.modalRef.hide();
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
