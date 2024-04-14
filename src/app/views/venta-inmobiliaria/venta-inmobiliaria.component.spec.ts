import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentaInmobiliariaComponent } from './venta-inmobiliaria.component';

describe('VentaApartamentoComponent', () => {
  let component: VentaInmobiliariaComponent;
  let fixture: ComponentFixture<VentaInmobiliariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VentaInmobiliariaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VentaInmobiliariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
