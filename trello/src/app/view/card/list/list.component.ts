import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Board, List } from '../../../core/models/index';
import { AdminRepo, HdRepo } from 'src/app/core/repos';
import { ListService } from 'src/app/core/apis';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() selList: List[];

  constructor(
    private listService: ListService,
    private route: ActivatedRoute,
		public adminRepo: AdminRepo,
		public hdRepo: HdRepo,
  ) { }

  ngOnInit(): void {
    console.log(this.selList);
    // this.selList = 'gkgk';
    // this.loadLists();
  }

  loadLists(): void {
		// const boardId = this.route.snapshot.paramMap.get('id');
		
		// this.listService.loadListsByBoardId(boardId).subscribe(lists => this.selList = lists);
		// console.log(this.lists);

	}
  

}
