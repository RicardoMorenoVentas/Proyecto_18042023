import { Cliente } from "./Cliente";
export class Pedido {
  public static id_clase_pd : number = 0;

  private _id: number;
  private _cliente: Cliente;
  private _cantidadProd: number;
  private _importeTotal: number;

  constructor(cli_e : Cliente, cant : number = 0, importe : number = 0){
    Pedido.id_clase_pd++;
    this._id = Pedido.id_clase_pd;
    this._cliente = cli_e;
    this._cantidadProd = cant;
    this._importeTotal = importe;
  }

  public get importeTotal(): number {
    return this._importeTotal;
  }
  public set importeTotal(value: number) {
    this._importeTotal = value;
  }
  public get cantidadProd(): number {
    return this._cantidadProd;
  }
  public set cantidadProd(value: number) {
    this._cantidadProd = value;
  }
  public get id(): number {
    return this._id;
  }
  public set id(value: number) {
    this._id = value;
  }
  public get cliente(): Cliente {
    return this._cliente;
  }
  public set cliente(value: Cliente) {
    this._cliente = value;
  }

}
