import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechtsvormComponent } from './rechtsvorm.component';

describe('RechtsvormComponent', () => {
  let component: RechtsvormComponent;
  let fixture: ComponentFixture<RechtsvormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RechtsvormComponent]
    });
    fixture = TestBed.createComponent(RechtsvormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
