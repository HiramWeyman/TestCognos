import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPonComponent } from './login-pon.component';

describe('LoginPonComponent', () => {
  let component: LoginPonComponent;
  let fixture: ComponentFixture<LoginPonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginPonComponent]
    });
    fixture = TestBed.createComponent(LoginPonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
