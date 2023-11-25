import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmrevisorComponent } from './admrevisor.component';

describe('AdmrevisorComponent', () => {
  let component: AdmrevisorComponent;
  let fixture: ComponentFixture<AdmrevisorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdmrevisorComponent]
    });
    fixture = TestBed.createComponent(AdmrevisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
