import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaulFooterComponent } from './defaul-footer.component';

describe('DefaulFooterComponent', () => {
  let component: DefaulFooterComponent;
  let fixture: ComponentFixture<DefaulFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DefaulFooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DefaulFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
