import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


import { Board } from '../../core/models/index';
import { BoardService } from '../../core/apis/index';

@Component({
  selector: 'app-card-layout',
  templateUrl: './card-layout.component.html',
  styleUrls: ['./card-layout.component.scss']
})
export class CardLayoutComponent implements OnInit {

  selBoard: Board;

  constructor(
    private boardService: BoardService,
    private route: ActivatedRoute,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.getBoard();
  }

  getBoard(): void {
    const UUID = +this.route.snapshot.paramMap.get('boardUUID');


    this.boardService.getBoard(UUID)
    .subscribe(selBoard => this.selBoard = selBoard);
  }
  
}
