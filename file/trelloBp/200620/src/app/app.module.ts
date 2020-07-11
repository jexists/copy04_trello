// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { ModalModule } from 'ngx-bootstrap/modal'
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

// import { DragulaModule } from 'ng2-dragula';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './core/service/in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './layout/header/header.component';
import { BoardLayoutComponent } from './layout/board-layout/board-layout.component';
import { CardLayoutComponent } from './layout/card-layout/card-layout.component';
import { SidebarBoardComponent } from './layout/board-layout/sidebar-board/sidebar-board.component';

import { CoreModule } from './core/core.module';
import { BoardModule } from './view/board/board.module';
import { CardModule } from './view/card/card.module';
import { SharedModule } from './shared/shared.module';
import { ComponentModule } from './core/components/components.module';

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
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    //서버연결 모듈
    HttpClientModule,
    // DragulaModule.forRoot(),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ComponentModule,

    // HttpClientInMemoryWebApiModule 모듈은 HTTP 요청을 가로채고 서버의 응답을 흉내냅니다.
    // 실제 서버가 준비 => 제거
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false, delay: 0 }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
