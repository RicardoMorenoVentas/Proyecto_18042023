import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadreListaPedidosComponent } from './padre-lista-pedidos.component';

describe('PadreListaPedidosComponent', () => {
  let component: PadreListaPedidosComponent;
  let fixture: ComponentFixture<PadreListaPedidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PadreListaPedidosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PadreListaPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
