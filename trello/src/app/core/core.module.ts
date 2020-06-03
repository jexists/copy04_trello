import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepoModule } from './repos/repo.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RepoModule
  ],
  exports: [
    RepoModule
  ]
})
export class CoreModule { }
