import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardComponent } from './board.component';
import { NewBoardModalComponent } from './new-board-modal/new-board-modal.component';



@NgModule({
  declarations: [
    BoardComponent,
    NewBoardModalComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BoardComponent
  ]

})
export class BoardModule { }
