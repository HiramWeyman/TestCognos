import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestscidComponent } from './testscid.component';

describe('TestscidComponent', () => {
  let component: TestscidComponent;
  let fixture: ComponentFixture<TestscidComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestscidComponent]
    });
    fixture = TestBed.createComponent(TestscidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
