import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemListadoComponent } from './components/item-listado/item-listado.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [ItemListadoComponent],
  imports: [CommonModule, IonicModule],
  exports: [ItemListadoComponent],
})
export class SharedModule {}
