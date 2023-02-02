import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SecondPgPageRoutingModule } from './second-pg-routing.module';

import { SecondPgPage } from './second-pg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SecondPgPageRoutingModule
  ],
  declarations: [SecondPgPage]
})
export class SecondPgPageModule {}
