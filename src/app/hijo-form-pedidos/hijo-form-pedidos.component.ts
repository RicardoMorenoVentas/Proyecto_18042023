import { Component, EventEmitter, Output } from '@angular/core';
import { Cliente } from 'src/_modelo/Cliente';
import { Pedido } from 'src/_modelo/Pedido';

@Component({
  selector: 'app-hijo-form-pedidos',
  templateUrl: './hijo-form-pedidos.component.html',
  styleUrls: ['./hijo-form-pedidos.component.css']
})
export class HijoFormPedidosComponent {

  private _cliente: Cliente = new Cliente("");

  private _pedido_act: Pedido = new Pedido(this._cliente);

  private _lista_pedidos: Array<Pedido> = [];

  @Output() evMPedido = new EventEmitter<Array<Pedido>>();


  public mandarPedido(a : void) : void {
    this._lista_pedidos.push(this._pedido_act);
    this.evMPedido.emit(this._lista_pedidos);
    this._cliente = new Cliente("");
    this._pedido_act = new Pedido(this._cliente);
  }

  public get pedido_act(): Pedido {
    return this._pedido_act;
  }
  public set pedido_act(value: Pedido) {
    this._pedido_act = value;
  }
  public get cliente(): Cliente {
    return this._cliente;
  }
  public set cliente(value: Cliente) {
    this._cliente = value;
  }
  public get lista_pedidos(): Array<Pedido> {
    return this._lista_pedidos;
  }
  public set lista_pedidos(value: Array<Pedido>) {
    this._lista_pedidos = value;
  }


}
