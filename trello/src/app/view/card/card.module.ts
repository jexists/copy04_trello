import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { OrderModule } from 'ngx-order-pipe';

import { NewCardComponent } from './new-card/new-card.component';
import { NewListComponent } from './new-list/new-list.component';
import { ListComponent } from './list/list.component';



@NgModule({
  declarations: [
    NewCardComponent,
    NewListComponent,
    ListComponent
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
  ]
})
export class CardModule { }
