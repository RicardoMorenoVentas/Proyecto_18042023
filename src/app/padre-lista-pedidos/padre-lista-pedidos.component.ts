import { Component } from '@angular/core';
import { Pedido } from 'src/_modelo/Pedido';

@Component({
  selector: 'app-padre-lista-pedidos',
  templateUrl: './padre-lista-pedidos.component.html',
  styleUrls: ['./padre-lista-pedidos.component.css']
})
export class PadreListaPedidosComponent {
  private _lista_pedidos: Array<Pedido> = [];
  public get lista_pedidos(): Array<Pedido> {
    return this._lista_pedidos;
  }
  public set lista_pedidos(value: Array<Pedido>) {
    this._lista_pedidos = value;
  }

  recibirLista(lista_recibida: Array<Pedido>): void {
    this._lista_pedidos = lista_recibida;
  }
}
