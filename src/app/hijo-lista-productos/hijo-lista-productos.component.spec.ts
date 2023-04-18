import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HijoListaProductosComponent } from './hijo-lista-productos.component';

describe('HijoListaProductosComponent', () => {
  let component: HijoListaProductosComponent;
  let fixture: ComponentFixture<HijoListaProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HijoListaProductosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HijoListaProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
