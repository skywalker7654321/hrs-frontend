import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InschrijvendelenComponent } from './inschrijvendelen.component';

describe('InschrijvendelenComponent', () => {
  let component: InschrijvendelenComponent;
  let fixture: ComponentFixture<InschrijvendelenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InschrijvendelenComponent]
    });
    fixture = TestBed.createComponent(InschrijvendelenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
