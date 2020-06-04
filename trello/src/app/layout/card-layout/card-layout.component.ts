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
	// @Input() selBoard: Board;
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
		this.loadList();

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

		// setTimeout(() => {
			
		// }, 500);
		this.boardService.loadBoardByUUID(boardUUID).subscribe(selBoard => this.selBoard = selBoard);

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
