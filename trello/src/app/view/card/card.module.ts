import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CardComponent } from './card/card.component';
import { ListComponent } from './list/list.component';



@NgModule({
  declarations: [
    CardComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    ListComponent
  ]
})
export class CardModule { }
