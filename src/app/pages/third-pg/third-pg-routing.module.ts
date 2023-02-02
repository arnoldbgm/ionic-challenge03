import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThirdPgPage } from './third-pg.page';

const routes: Routes = [
  {
    path: '',
    component: ThirdPgPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThirdPgPageRoutingModule {}
