import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatrpopupComponent } from './updatrpopup.component';

describe('UpdatrpopupComponent', () => {
  let component: UpdatrpopupComponent;
  let fixture: ComponentFixture<UpdatrpopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatrpopupComponent]
    });
    fixture = TestBed.createComponent(UpdatrpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
