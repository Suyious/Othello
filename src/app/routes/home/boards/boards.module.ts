import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { BoardsRoutingModule } from './boards-routing.module';
import { BoardsComponent } from './boards.component';
import { ListCardComponent } from './components/containers/cards/list/list.component';
import { ListColumnComponent } from './components/containers/column/list/list.component';
import { ListItemComponent } from './templates/list-item/list-item.component';


@NgModule({
  declarations: [
    BoardsComponent,
    ListCardComponent,
    ListColumnComponent,
    ListItemComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    BoardsRoutingModule,
    ReactiveFormsModule,
  ]
})
export class BoardsModule { }
