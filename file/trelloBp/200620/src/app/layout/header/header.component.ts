import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { BoardService, ListService } from '../../core/apis/index';
import { Board } from '../../core/models/index';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  selBoard: Board;
  // @Input() selBoard: Board;

  constructor(

  ) { }

  ngOnInit(): void {
    
  }

  onTextFocus(): void {
    
  }

}
