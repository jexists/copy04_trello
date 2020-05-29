import { Component, OnInit } from '@angular/core';

import { Board } from '../../core/models/index';
// import { BOARDS } from '../../core/mockup/mock-board';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  
  // board: Board = {
  //   boardUUID: 11, 
  //   boardTitle: 'Test board', 
  //   boardBg: '#fff',
  //   starYN: false,
  //   accessYN: true,
  // };

  // boardn[] = BOARDS;
  constructor(

  ) { }

  ngOnInit(): void {
  }

}
