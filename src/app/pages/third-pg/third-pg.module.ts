import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ThirdPgPageRoutingModule } from './third-pg-routing.module';

import { ThirdPgPage } from './third-pg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ThirdPgPageRoutingModule
  ],
  declarations: [ThirdPgPage]
})
export class ThirdPgPageModule {}
