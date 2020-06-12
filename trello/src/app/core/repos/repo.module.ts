import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HdRepo, AdminRepo } from './index';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule
  ],
  providers: [
    HdRepo,
    AdminRepo
  ]
})
export class RepoModule { }
