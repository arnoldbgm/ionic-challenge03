import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SecondPgPage } from './second-pg.page';

const routes: Routes = [
  {
    path: '',
    component: SecondPgPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecondPgPageRoutingModule {}
