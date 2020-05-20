import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { BoardLayoutComponent } from './layout/board-layout/board-layout.component';
import { CardLayoutComponent } from './layout/card-layout/card-layout.component';
import { SidebarBoardComponent } from './layout/board-layout/sidebar-board/sidebar-board.component';

import { BoardModule } from './view/board/board.module';

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
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
