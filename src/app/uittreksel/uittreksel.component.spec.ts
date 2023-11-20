import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UittrekselComponent } from './uittreksel.component';

describe('UittrekselComponent', () => {
  let component: UittrekselComponent;
  let fixture: ComponentFixture<UittrekselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UittrekselComponent]
    });
    fixture = TestBed.createComponent(UittrekselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
