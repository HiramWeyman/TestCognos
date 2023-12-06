import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestcreenciasComponent } from './testcreencias.component';

describe('TestcreenciasComponent', () => {
  let component: TestcreenciasComponent;
  let fixture: ComponentFixture<TestcreenciasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestcreenciasComponent]
    });
    fixture = TestBed.createComponent(TestcreenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
