import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { OrderModule } from 'ngx-order-pipe';
// import { AutosizeModule } from 'ngx-autosize';

import { NewCardComponent } from './new-card/new-card.component';
import { NewListComponent } from './new-list/new-list.component';
import { ListComponent } from './list/list.component';
import { CardComponent } from './card/card.component';
import { ModalListComponent } from './modal-list/modal-list.component';
import { ModalCardComponent } from './modal-card/modal-card.component';



@NgModule({
  declarations: [
    NewCardComponent,
    NewListComponent,
    ListComponent,
    CardComponent,
    ModalListComponent,
    ModalCardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    OrderModule,
    // AutosizeModule
  ],
  exports: [
    NewListComponent,
    NewCardComponent,
    ListComponent,
    // ModalCardComponent,
    // ModalListComponent
  ],
  providers: [
    DatePipe
  ]
})
export class CardModule { }
