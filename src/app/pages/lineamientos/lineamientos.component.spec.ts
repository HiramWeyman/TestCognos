import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineamientosComponent } from './lineamientos.component';

describe('LineamientosComponent', () => {
  let component: LineamientosComponent;
  let fixture: ComponentFixture<LineamientosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LineamientosComponent]
    });
    fixture = TestBed.createComponent(LineamientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
