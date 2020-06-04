import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  BoardService,
  ListService,
  CardService
} from './index';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [],
  providers: [
    BoardService,
    ListService,
    CardService
  ]
})
export class ApiModule { }