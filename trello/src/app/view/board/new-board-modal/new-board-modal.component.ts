import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

// import * as _ from 'lodash';

import { Board } from '../../../core/models/index';
import { BoardService } from '../../../core/apis/index';


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
      let currentColor;
      const boardColor = <HTMLElement>document.querySelector('.board-select');
      const selColor = getComputedStyle(target).background;
      let activeMenu = <HTMLElement>document.querySelector('.click');
	    if (activeMenu) {
        activeMenu.classList.remove('click');
      }
      console.log(boardColor);
      console.log(selColor);
      
      boardColor.style.background = selColor;
      target.childNodes[0].classList.add('click');
    }
    // onSelectBg(target): void {
    //   let currentColor;
    //   const boardColor = <HTMLElement>document.querySelector('.board-select');
    //   const selColor = getComputedStyle(target.parentNode).background;
    //   boardColor.style.background = selColor;
    //   // target.
    //   // console.log(target.childNodes[0]);
    //   // console.log(target.children[0]);
    //   // console.log(target);
    //   if (currentColor) {
    //     // currentCo lor.classList.remove('click');
    //   }
    //   target.classList.add('click');
    //   currentColor = target; 
    //   console.log(currentColor);
      
    // }
// var currentMenu;
// function clickMenuHandler(e) {
// 	if (currentMenu) {
// 		currentMenu.classList.remove('active');
// 	}
// 	e.target.classList.add('active');
// 	currentMenu = e.target;
// }
// var menu = document.querySeletorAll('.menu');
// menu.addEventListener('click',clickMenuHandler);
    onHover($event): void {
      // if ($event.childNodes[0].classList.contains('color') === true) {
      //   $event = null;
      //   return;
      // }
      // console.log($event.childNodes[0]);
      // console.log($event.childNodes[0].classList.contains('color'));
      
      // $event.childNodes[0].classList.add('hover');
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
