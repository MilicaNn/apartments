import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResortActivitesComponent } from './resort-activites.component';

describe('ResortActivitesComponent', () => {
  let component: ResortActivitesComponent;
  let fixture: ComponentFixture<ResortActivitesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResortActivitesComponent]
    });
    fixture = TestBed.createComponent(ResortActivitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
