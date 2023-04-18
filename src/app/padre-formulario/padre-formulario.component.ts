import { Component, Input } from '@angular/core';
import { Limpieza, Perecedero, Tipo_producto } from 'src/_modelo/Enum_producto';
import { Producto } from 'src/_modelo/Producto';

@Component({
  selector: 'app-padre-formulario',
  templateUrl: './padre-formulario.component.html',
  styleUrls: ['./padre-formulario.component.css']
})
export class PadreFormularioComponent {

  private _lista_productos: Array<Producto> = [];

  private _producto_act: Producto = new Producto();

  private _llaves = Object.keys;


  private _opciones_producto: string[] = Object.values(Tipo_producto).map((v, i, arr) => v as string);

  private _opciones_limpieza: string[] = Object.values(Limpieza).map((v, i, arr) => v as string);

  private _opciones_perecedero: string[] = Object.values(Perecedero).map((v, i, arr) => v as string);

  private _tipo_producto = Tipo_producto;

  private _tipo_limpieza = Limpieza;

  private _tipo_perecedero = Perecedero;

  constructor(){}

  public get producto_act(): Producto {
    return this._producto_act;
  }
  public set producto_act(value: Producto) {
    this._producto_act = value;
  }
  public get llaves() {
    return this._llaves;
  }
  public set llaves(value) {
    this._llaves = value;
  }
  public get tipo_producto() {
    return this._tipo_producto;
  }
  public set tipo_producto(value) {
    this._tipo_producto = value;
  }
  public get tipo_limpieza() {
    return this._tipo_limpieza;
  }
  public set tipo_limpieza(value) {
    this._tipo_limpieza = value;
  }
  public get tipo_perecedero() {
    return this._tipo_perecedero;
  }
  public set tipo_perecedero(value) {
    this._tipo_perecedero = value;
  }
  public get lista_productos(): Array<Producto> {
    return this._lista_productos;
  }
  public set lista_productos(value: Array<Producto>) {
    this._lista_productos = value;
  }
  public get opciones_producto(): string[] {
    return this._opciones_producto;
  }
  public set opciones_producto(value: string[]) {
    this._opciones_producto = value;
  }
  public get opciones_limpieza(): string[] {
    return this._opciones_limpieza;
  }
  public set opciones_limpieza(value: string[]) {
    this._opciones_limpieza = value;
  }
  public get opciones_perecedero(): string[] {
    return this._opciones_perecedero;
  }
  public set opciones_perecedero(value: string[]) {
    this._opciones_perecedero = value;
  }

  public pushProducto(a:void) : void {
    this._lista_productos.push(this._producto_act);
    this._producto_act = new Producto();
  }


}
