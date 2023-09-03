import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/layout/navigation/navigation.component';
import { BoardComponent } from './components/containers/cards/board/board.component';
import { RouterModule } from '@angular/router';
import { TimeagoPipe } from './pipes/timeago.pipe';

@NgModule({
  declarations: [
    NavigationComponent,
    BoardComponent,
    TimeagoPipe,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    NavigationComponent,
    BoardComponent,
    TimeagoPipe,
  ]
})
export class SharedModule { }
