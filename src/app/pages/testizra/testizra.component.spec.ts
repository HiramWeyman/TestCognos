import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestizraComponent } from './testizra.component';

describe('TestizraComponent', () => {
  let component: TestizraComponent;
  let fixture: ComponentFixture<TestizraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestizraComponent]
    });
    fixture = TestBed.createComponent(TestizraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
