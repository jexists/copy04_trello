import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectiveModule } from './directives/directive.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DirectiveModule,
  ],
  exports: [
    
  ]
})
export class SharedModule { }
