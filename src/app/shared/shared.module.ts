import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './components/layout/modals/menu/menu.component';
import { NavigationComponent } from './components/layout/navigation/navigation.component';
import { TabsComponent } from './components/layout/tabs/tabs.component';
import { TimeagoPipe } from './pipes/timeago.pipe';

@NgModule({
  declarations: [
    NavigationComponent,
    MenuComponent,
    TabsComponent,
    TimeagoPipe,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    NavigationComponent,
    MenuComponent,
    TabsComponent,
    TimeagoPipe,
  ]
})
export class SharedModule { }
