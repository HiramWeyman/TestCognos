import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuperaComponent } from './recupera.component';

describe('RecuperaComponent', () => {
  let component: RecuperaComponent;
  let fixture: ComponentFixture<RecuperaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecuperaComponent]
    });
    fixture = TestBed.createComponent(RecuperaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
