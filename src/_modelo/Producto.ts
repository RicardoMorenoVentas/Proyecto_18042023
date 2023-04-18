import { Limpieza, Perecedero, Tipo_producto } from "./Enum_producto";

export class Producto {
  public static cantidad_prod: number = 0;
  private _id: number;
  private _nombre: string = "";
  private _precio_unitario: number = 0;
  private _canitad_producto: number = 0;
  private _tipo_alimento: Tipo_producto = Tipo_producto.bebida;
  private _alimento_perecedero: Perecedero = Perecedero["Es perecedero"];
  private _limpieza: Limpieza = Limpieza.no;

  constructor() {
    Producto.cantidad_prod++;
    this._id = Producto.cantidad_prod;
  }

  public get canitad_producto(): number {
    return this._canitad_producto;
  }
  public set canitad_producto(value: number) {
    this._canitad_producto = value;
  }
  public get limpieza(): Limpieza {
    return this._limpieza;
  }
  public set limpieza(value: Limpieza) {
    this._limpieza = value;
  }
  public get alimento_perecedero(): Perecedero {
    return this._alimento_perecedero;
  }
  public set alimento_perecedero(value: Perecedero) {
    this._alimento_perecedero = value;
  }
  public get tipo_alimento(): Tipo_producto {
    return this._tipo_alimento;
  }
  public set tipo_alimento(value: Tipo_producto) {
    this._tipo_alimento = value;
  }
  public get precio(): number {
    return this._precio_unitario;
  }
  public set precio(value: number) {
    this._precio_unitario = value;
  }
  public get nombre(): string {
    return this._nombre;
  }
  public set nombre(value: string) {
    this._nombre = value;
  }
  public get id(): number {
    return this._id;
  }
  public set id(value: number) {
    this._id = value;
  }
}
