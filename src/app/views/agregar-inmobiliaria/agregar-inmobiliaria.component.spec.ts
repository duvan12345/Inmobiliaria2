import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarInmobiliariaComponent } from './agregar-inmobiliaria.component';

describe('AgregarInmobiliariaComponent', () => {
  let component: AgregarInmobiliariaComponent;
  let fixture: ComponentFixture<AgregarInmobiliariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgregarInmobiliariaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgregarInmobiliariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
