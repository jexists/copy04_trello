import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BoardLayoutComponent } from './layout/board-layout/board-layout.component';
import { CardLayoutComponent } from './layout/card-layout/card-layout.component';
import { SidebarBoardComponent } from './layout/board-layout/sidebar-board/sidebar-board.component';
import { BoardComponent } from './view/board/board.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BoardLayoutComponent,
    CardLayoutComponent,
    SidebarBoardComponent,
    BoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
