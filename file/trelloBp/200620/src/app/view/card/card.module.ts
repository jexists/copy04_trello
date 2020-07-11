import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardComponent } from './card/card.component';
import { ListComponent } from './list/list.component';



@NgModule({
  declarations: [
    CardComponent,
    ListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListComponent
  ]
})
export class CardModule { }
