import { Component, Input } from '@angular/core';
import { Tipo_producto } from 'src/_modelo/Enum_producto';
import { Producto } from 'src/_modelo/Producto';

@Component({
  selector: 'app-hijo-lista-productos',
  templateUrl: './hijo-lista-productos.component.html',
  styleUrls: ['./hijo-lista-productos.component.css']
})
export class HijoListaProductosComponent {

  @Input() lista_recibida : Array<Producto> = [];
}
