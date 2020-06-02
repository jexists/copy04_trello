import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { ModalModule } from 'ngx-bootstrap/modal'

// import { DragulaModule } from 'ng2-dragula';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './core/service/in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './layout/header/header.component';
import { BoardLayoutComponent } from './layout/board-layout/board-layout.component';
import { CardLayoutComponent } from './layout/card-layout/card-layout.component';
import { SidebarBoardComponent } from './layout/board-layout/sidebar-board/sidebar-board.component';

import { BoardModule } from './view/board/board.module';
import { CoreModule } from './core/core.module';
import { CardModule } from './view/card/card.module';

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
    CardModule,
    CoreModule,
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    HttpClientModule,
    // DragulaModule.forRoot(),

    // HttpClientInMemoryWebApiModule 모듈은 HTTP 요청을 가로채고 서버의 응답을 흉내냅니다.
    // 실제 서버가 준비 => 제거
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
