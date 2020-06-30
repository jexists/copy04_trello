import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CardComponent } from './new-card/card.component';
import { ListComponent } from './new-list/list.component';



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
    ListComponent,
    CardComponent
  ]
})
export class CardModule { }
