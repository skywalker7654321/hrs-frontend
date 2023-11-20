import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionarisComponent } from './functionaris.component';

describe('FunctionarisComponent', () => {
  let component: FunctionarisComponent;
  let fixture: ComponentFixture<FunctionarisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FunctionarisComponent]
    });
    fixture = TestBed.createComponent(FunctionarisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
