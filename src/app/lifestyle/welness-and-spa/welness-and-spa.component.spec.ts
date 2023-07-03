import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelnessAndSpaComponent } from './welness-and-spa.component';

describe('WelnessAndSpaComponent', () => {
  let component: WelnessAndSpaComponent;
  let fixture: ComponentFixture<WelnessAndSpaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WelnessAndSpaComponent]
    });
    fixture = TestBed.createComponent(WelnessAndSpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
