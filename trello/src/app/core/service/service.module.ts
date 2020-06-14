import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  InMemoryDataService,
  UUIDService
} from './index';
// import { CommonUtil } from './uuid.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [],
  providers: [
    InMemoryDataService,
    UUIDService
  ]
})
export class ServiceModule { }
