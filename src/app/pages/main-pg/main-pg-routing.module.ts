import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPgPage } from './main-pg.page';

const routes: Routes = [
  {
    path: '',
    component: MainPgPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPgPageRoutingModule {}
