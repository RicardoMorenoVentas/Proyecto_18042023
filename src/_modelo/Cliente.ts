export class Cliente {
  public static id_cliente_cls : number = 0;

  private _id: number;
  private _nombre: string;

  constructor(nombre:string){
    Cliente.id_cliente_cls++;
    this._id = Cliente.id_cliente_cls;
    this._nombre = nombre;
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
