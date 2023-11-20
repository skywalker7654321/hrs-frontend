import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OndernemingComponent } from './onderneming.component';

describe('OndernemingComponent', () => {
  let component: OndernemingComponent;
  let fixture: ComponentFixture<OndernemingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OndernemingComponent]
    });
    fixture = TestBed.createComponent(OndernemingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
