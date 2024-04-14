import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArriendoInmobiliariaComponent } from './arriendo-inmobiliaria.component';

describe('ArriendoInmobiliariaComponent', () => {
  let component: ArriendoInmobiliariaComponent;
  let fixture: ComponentFixture<ArriendoInmobiliariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArriendoInmobiliariaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArriendoInmobiliariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
