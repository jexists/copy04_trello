import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
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

	
	boards: Board[];
	newBoardForm = new FormGroup({
    	newTitle: new FormControl(''),
    	// lastName: new FormControl(''),
	});

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
	}

	ngOnDestroy(): void {

	}
    //////////////////////////////////////////////////////////////////////////////////
    //
    //   Component Data Manipulation Methods
    //
    //////////////////////////////////////////////////////////////////////////////////

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
        console.log(target.parentNode.nodeName);
        
        return; 
      } else if(activeMenu){
        activeMenu.classList.remove('click');
      }

      boardColor.style.background = selColor;
      target.classList.add('click');
      console.log('h');
      
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
  
	onSubmit(): void {
	  console.log(this.newBoardForm.value);
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
