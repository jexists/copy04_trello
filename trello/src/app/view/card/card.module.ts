import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { OrderModule } from 'ngx-order-pipe';

import { NewCardComponent } from './new-card/new-card.component';
import { NewListComponent } from './new-list/new-list.component';
import { ListComponent } from './list/list.component';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [
    NewCardComponent,
    NewListComponent,
    ListComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    OrderModule
  ],
  exports: [
    NewListComponent,
    NewCardComponent,
    ListComponent
  ],
  providers: [
    DatePipe
  ]
})
export class CardModule { }
