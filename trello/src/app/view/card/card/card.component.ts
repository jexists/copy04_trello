import { Component, OnInit } from '@angular/core';

import { Card } from '../../../core/models/index';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  
  card: Card[];
  
  constructor() { }

  ngOnInit(): void {
  }

}
