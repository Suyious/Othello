import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardsRoutingModule } from './boards-routing.module';
import { BoardsComponent } from './boards.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    BoardsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    BoardsRoutingModule
  ]
})
export class BoardsModule { }
