import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { BoardComponent } from './board.component';
import { NewBoardModalComponent } from './new-board-modal/new-board-modal.component';



@NgModule({
  declarations: [
    BoardComponent,
    NewBoardModalComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot()
  ],
  exports: [
    BoardComponent
  ]

})
export class BoardModule { }
