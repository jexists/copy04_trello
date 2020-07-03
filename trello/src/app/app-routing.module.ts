import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoardLayoutComponent } from './layout/board-layout/board-layout.component';
import { CardLayoutComponent } from './layout/card-layout/card-layout.component';


const routes: Routes = [
  { path: '', redirectTo: 'boards', pathMatch: 'full' },
  { path: 'boards', component: BoardLayoutComponent },
  { path: 'card/:id', component: CardLayoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
