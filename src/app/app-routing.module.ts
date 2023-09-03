import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
  { path: 'user', loadChildren: () => import('./routes/home/auth/auth.module').then(m => m.AuthModule) },
  { path: 'dashboard', loadChildren: () => import('./routes/home/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'boards/:id', loadChildren: () => import('./routes/home/boards/boards.module').then(m => m.BoardsModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
