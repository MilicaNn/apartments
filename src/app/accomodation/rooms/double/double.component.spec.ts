import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleComponent } from './double.component';

describe('DoubleComponent', () => {
  let component: DoubleComponent;
  let fixture: ComponentFixture<DoubleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoubleComponent]
    });
    fixture = TestBed.createComponent(DoubleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
