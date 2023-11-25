import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioadmComponent } from './inicioadm.component';

describe('InicioadmComponent', () => {
  let component: InicioadmComponent;
  let fixture: ComponentFixture<InicioadmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InicioadmComponent]
    });
    fixture = TestBed.createComponent(InicioadmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
