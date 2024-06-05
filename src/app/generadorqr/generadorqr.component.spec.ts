import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneradorqrComponent } from './generadorqr.component';

describe('GeneradorqrComponent', () => {
  let component: GeneradorqrComponent;
  let fixture: ComponentFixture<GeneradorqrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeneradorqrComponent]
    });
    fixture = TestBed.createComponent(GeneradorqrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
