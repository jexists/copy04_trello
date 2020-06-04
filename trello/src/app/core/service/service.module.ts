import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  InMemoryDataService
} from './index';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [],
  providers: [
    InMemoryDataService
  ]
})
export class ServiceModule { }
