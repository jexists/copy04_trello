import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

// import { DragulaService } from 'ng2-dragula';

import { Board, List } from '../../core/models/index';
import { BoardService, ListService } from '../../core/apis/index';

@Component({
	selector: 'app-card-layout',
	templateUrl: './card-layout.component.html',
	styleUrls: ['./card-layout.component.scss']
})
export class CardLayoutComponent implements OnInit {

	@Input() selBoard: Board;

	lists: List[];

	constructor(
		private boardService: BoardService,
		private listService: ListService,
		private route: ActivatedRoute,
		private location: Location,
		// private dragula: DragulaService
	) { }


	//////////////////////////////////////////////////////////////////////////////////
	//
	//   Component Lifecycle Methods
	//
	//////////////////////////////////////////////////////////////////////////////////

	ngOnInit(): void {
		this.loadBoard();
		this.loadBgColor();
		this.loadList();
		// console.log(this.selBoard);
		
	}

	ngOnDestroy(): void {

	}
	//////////////////////////////////////////////////////////////////////////////////
	//
	//   Component Data Manipulation Methods
	//
	//////////////////////////////////////////////////////////////////////////////////

	loadBoard(): void {
		const boardUUID = +this.route.snapshot.paramMap.get('boardUUID');

		this.boardService.loadBoardByUUID(boardUUID).subscribe(selBoard => this.selBoard = selBoard);
		
		if (this.selBoard.accessYN === "10") {
			this.selBoard.accessYN = "private";
		} else if (this.selBoard.accessYN === "20") {
			this.selBoard.accessYN = "public";
		}
	}
	
	loadBgColor(): void {
		const wrapColor = <HTMLElement>document.querySelector('#wrap');
		wrapColor.style.background = this.selBoard.boardBg;
		
		const headColor = <HTMLElement>document.querySelector('#headBox');
		headColor.style.background = 'rgba(0, 0, 0, 0.3)';
	}

	loadList(): void {
		// const UUID = +this.route.snap
		// this.listService.getLists()
		// .subscribe(lists => this.lists = lists)
	}

	save(): void {
		this.boardService.updateBoard(this.selBoard)
			.subscribe();
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
