import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home/home.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    ModulesRoutingModule,
    SharedModule,
    IonicModule,
  ],
})
export class ModulesModule {}
