import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PadreFormularioComponent } from './padre-formulario/padre-formulario.component';
import { HijoListaProductosComponent } from './hijo-lista-productos/hijo-lista-productos.component';
import { FormsModule } from '@angular/forms';
import { PadreListaPedidosComponent } from './padre-lista-pedidos/padre-lista-pedidos.component';
import { HijoFormPedidosComponent } from './hijo-form-pedidos/hijo-form-pedidos.component';

@NgModule({
  declarations: [
    AppComponent,
    PadreFormularioComponent,
    HijoListaProductosComponent,
    PadreListaPedidosComponent,
    HijoFormPedidosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
