import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaulHeaderComponent } from './defaul-header.component';

describe('DefaulHeaderComponent', () => {
  let component: DefaulHeaderComponent;
  let fixture: ComponentFixture<DefaulHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DefaulHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DefaulHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
