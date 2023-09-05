import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/layout/navigation/navigation.component';
import { BoardComponent } from './components/containers/cards/board/board.component';
import { RouterModule } from '@angular/router';
import { TimeagoPipe } from './pipes/timeago.pipe';
import { MenuComponent } from './components/layout/modals/menu/menu.component';
import { ListComponent } from './components/containers/column/list/list.component';
import { TabsComponent } from './components/layout/tabs/tabs.component';
import { ListItemComponent } from './templates/list-item/list-item.component';

@NgModule({
  declarations: [
    NavigationComponent,
    BoardComponent,
    ListComponent,
    MenuComponent,
    TabsComponent,
    ListItemComponent,
    TimeagoPipe,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    NavigationComponent,
    BoardComponent,
    ListComponent,
    MenuComponent,
    TabsComponent,
    ListItemComponent,
    TimeagoPipe,
  ]
})
export class SharedModule { }
