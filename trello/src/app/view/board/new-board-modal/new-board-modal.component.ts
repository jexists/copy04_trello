import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

// import * as _ from 'lodash';

import { Board } from '../../../core/models/index';
import { BoardService } from '../../../core/apis/index';
import { Button } from 'protractor';


// import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';

@Component({
  selector: 'app-new-board-modal',
  templateUrl: './new-board-modal.component.html',
  styleUrls: ['./new-board-modal.component.scss']
})
export class NewBoardModalComponent implements OnInit {

	
	selBoard: Board;
	newBoardForm: FormGroup;

	constructor(
		public modalRef: BsModalRef,
    	private boardService: BoardService,
    	private modalService: BsModalService
	) { }

    //////////////////////////////////////////////////////////////////////////////////
    //
    //   Component Lifecycle Methods
    //
    //////////////////////////////////////////////////////////////////////////////////

	ngOnInit(): void {
    this.onFormGroupInit();
	}

	ngOnDestroy(): void {

	}
    //////////////////////////////////////////////////////////////////////////////////
    //
    //   Component Data Manipulation Methods
    //
    //////////////////////////////////////////////////////////////////////////////////

    onFormGroupInit(): void {
		this.newBoardForm = new FormGroup({
			newTitle: new FormControl(null, Validators.compose([
				Validators.required,
				Validators.maxLength(100)
			])),
			
		});
	}	
	
	onPropertyInit(): void {
		this.selBoard = null;
	}
    //////////////////////////////////////////////////////////////////////////////////
    //
    //	 Component View Events Methods
    //
	//////////////////////////////////////////////////////////////////////////////////

    
    onSelectBg(target): void {
      const boardColor = <HTMLElement>document.querySelector('.board-select');
      const selColor = getComputedStyle(target.parentNode).background;
      let activeMenu = <HTMLElement>document.querySelector('.click');
    
      if (target.parentNode.nodeName !== 'BUTTON') {
        return; 
      } else if(activeMenu){
        activeMenu.classList.remove('click');
      }

      boardColor.style.background = selColor;
      target.classList.add('click');
    }

    onHover($event): void {
      let hoverMenu = <HTMLElement>document.querySelector('.hover');
      
      if (!$event.childNodes[0] || $event.childNodes[0].nodeName !== 'SPAN') {
        return; 
      }else if(hoverMenu){
        hoverMenu.classList.remove('hover');
      }

      $event.childNodes[0].classList.add('hover');
    }

    onLeave($event): void {
      let hoverMenu = <HTMLElement>document.querySelector('.hover');
      hoverMenu.classList.remove('hover');
    }
    //////////////////////////////////////////////////////////////////////////////////
    //
    //   Component CRUD Methods
    //
    //////////////////////////////////////////////////////////////////////////////////


	
  
	addBoard(boardTitle: string): void {
	  // boardTitle = boardTitle.trim();
	  // if(!boardTitle) {return;}
	  // this.boardService.loadBoard({ boardTitle } as Board)
	  // .subscribe(board => {
	  //   this.boards.push(board)
	  // })
	}
  
	onSubmit(target, $event): void {
    // console.log(this.newBoardForm.value);
    $event.preventDefault();
    $event.stopPropagation();
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
