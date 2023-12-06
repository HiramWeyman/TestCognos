import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestbdidpComponent } from './testbdidp.component';

describe('TestbdidpComponent', () => {
  let component: TestbdidpComponent;
  let fixture: ComponentFixture<TestbdidpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestbdidpComponent]
    });
    fixture = TestBed.createComponent(TestbdidpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
