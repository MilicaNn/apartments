import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThaiWeddingsComponent } from './thai-weddings.component';

describe('ThaiWeddingsComponent', () => {
  let component: ThaiWeddingsComponent;
  let fixture: ComponentFixture<ThaiWeddingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThaiWeddingsComponent]
    });
    fixture = TestBed.createComponent(ThaiWeddingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
