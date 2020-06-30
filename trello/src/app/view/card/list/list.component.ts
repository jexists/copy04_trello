import { Component, OnInit } from '@angular/core';

import { ListService } from 'src/app/core/apis';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(
	  private listService: ListService,
  ) { }

  ngOnInit(): void {
    
  }

}
