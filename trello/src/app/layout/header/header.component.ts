import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { BoardService, ListService } from '../../core/apis/index';
import { Board } from '../../core/models/index';

import { NewBoardModalComponent } from '../../view/board/new-board-modal/new-board-modal.component'; 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  selBoard: Board;
  // @Input() selBoard: Board;

  modalRef: BsModalRef;
  constructor(
	private modalService: BsModalService,
  ) { }

  ngOnInit(): void {
    
  }

  onTextFocus(): void {
    
  }

  onModalOpen($event): void {
		$event.preventDefault();
		$event.stopPropagation();

    this.modalRef = this.modalService.show( NewBoardModalComponent,
    	{'initialState':{'selBoard':null}}
    );
    
    const subscriber = this.modalService.onHide.subscribe(
      	res => {
          subscriber.unsubscribe();
      	}
    );
	}

}
