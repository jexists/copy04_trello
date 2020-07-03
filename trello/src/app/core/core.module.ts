import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepoModule } from './repos/repo.module';
import { ApiModule } from './apis/api.module';
import { ServiceModule } from './service/service.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RepoModule,
    ApiModule,
    ServiceModule
  ],
  exports: [
    RepoModule,
    ApiModule,
    ServiceModule
  ]
})
export class CoreModule { }
