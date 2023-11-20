import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VestigingComponent } from './vestiging.component';

describe('VestigingComponent', () => {
  let component: VestigingComponent;
  let fixture: ComponentFixture<VestigingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VestigingComponent]
    });
    fixture = TestBed.createComponent(VestigingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
