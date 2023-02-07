import { Component, Input } from '@angular/core';
import { ComponentLista } from 'src/app/modules/home/interface/componente-lista';

@Component({
  selector: 'app-item-listado',
  templateUrl: './item-listado.component.html',
  styleUrls: ['./item-listado.component.scss'],
})
export class ItemListadoComponent {

  @Input() dataJson!: Array<ComponentLista>
  constructor() { 
    //
  }


}
