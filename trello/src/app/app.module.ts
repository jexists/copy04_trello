import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ModalModule } from 'ngx-bootstrap/modal'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { BoardLayoutComponent } from './layout/board-layout/board-layout.component';
import { CardLayoutComponent } from './layout/card-layout/card-layout.component';
import { SidebarBoardComponent } from './layout/board-layout/sidebar-board/sidebar-board.component';

import { BoardModule } from './view/board/board.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BoardLayoutComponent,
    CardLayoutComponent,
    SidebarBoardComponent,
  ],
  imports: [
    BoardModule,
    CoreModule,
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
