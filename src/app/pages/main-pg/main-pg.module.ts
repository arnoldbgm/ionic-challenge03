import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainPgPageRoutingModule } from './main-pg-routing.module';

import { MainPgPage } from './main-pg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainPgPageRoutingModule
  ],
  declarations: [MainPgPage]
})
export class MainPgPageModule {}
