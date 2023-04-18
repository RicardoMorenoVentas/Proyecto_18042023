import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HijoFormPedidosComponent } from './hijo-form-pedidos.component';

describe('HijoFormPedidosComponent', () => {
  let component: HijoFormPedidosComponent;
  let fixture: ComponentFixture<HijoFormPedidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HijoFormPedidosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HijoFormPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
